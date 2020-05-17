// Original code by Mr Megahertz
// Url: https://pastebin.com/54nA1EaH
// Updates by headkaze

using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading;
using System.Threading.Tasks;

using LHADecompressor;

namespace YMPlayer
{
    public class YMParser
    {
        // http://leonard.oxg.free.fr/ymformat.html

        private string m_type = null;
        private uint m_songAttributes = 0;
        private ushort m_digidrumsSamples = 0;
        private uint m_ymFrequency = 0;

        private string m_title = null;
        private string m_artist = null;
        private string m_comments = null;

        private int m_frameCount = 0;
        private int m_frameLoop = 0;
        private int m_frameRate = 0;
        private TimeSpan m_totalTime;
        private byte[] m_bytes = null;

        public YMParser(string fileName)
        {
            LhaFile lhaFile = new LhaFile(fileName, Encoding.UTF8);
            LhaEntry lhaEntry = lhaFile.GetEntry(0);
            byte[] bytes = lhaFile.GetEntryBytes(lhaEntry);
            lhaFile.Close();

            using (MemoryStream memoryStream = new MemoryStream(bytes))
            {
                using (BinaryReader binaryReader = new BinaryReader(memoryStream))
                {
                    // Header
                    ASCIIEncoding encoding = new ASCIIEncoding();

                    m_type = encoding.GetString(binaryReader.ReadBytes(4));
                    string checkString = encoding.GetString(binaryReader.ReadBytes(8));

                    if (!checkString.Equals("LeOnArD!"))
                        return;

                    m_frameCount = (int)SwapByteOrder(binaryReader.ReadUInt32());
                    m_songAttributes = SwapByteOrder(binaryReader.ReadUInt32());
                    m_digidrumsSamples = SwapByteOrder(binaryReader.ReadUInt16());
                    m_ymFrequency = SwapByteOrder(binaryReader.ReadUInt32());
                    m_frameRate = SwapByteOrder(binaryReader.ReadUInt16());
                    m_frameLoop = (int)SwapByteOrder(binaryReader.ReadUInt32());

                    binaryReader.ReadUInt16(); // Unused bytes

                    // Song Info
                    m_title = ReadNullTerminationString(binaryReader, encoding);
                    m_artist = ReadNullTerminationString(binaryReader, encoding);
                    m_comments = ReadNullTerminationString(binaryReader, encoding);

                    // Read interleaved frames
                    m_bytes = ReadAllFrames(binaryReader, m_frameCount);
                }
            }

            m_totalTime = TimeSpan.FromSeconds((m_frameCount / m_frameRate));
        }

        private byte[] ReadAllFrames(BinaryReader reader, int frameCount)
        {
            int totalBytes = 16 * frameCount;
            int currentRegisterStreamSize = totalBytes / 16;

            byte[] tempArray = new byte[totalBytes];
            byte[] finalArray = new byte[totalBytes];

            tempArray = reader.ReadBytes(totalBytes);

            byte currentValue;

            for (int currentRegister = 0; currentRegister < 16; currentRegister++)
            {

                int offset = (currentRegisterStreamSize * (currentRegister));
                for (int i = 0; i < currentRegisterStreamSize; i++)
                {
                    currentValue = tempArray[i + offset];
                    finalArray[16 * i + currentRegister] = currentValue;
                }
            }
            return finalArray;
        }

        private string ReadNullTerminationString(BinaryReader reader, Encoding encoding)
        {
            byte[] temp = new byte[1];
            StringBuilder stringBuilder = new StringBuilder();
            while (true)
            {
                temp[0] = reader.ReadByte();

                if (temp[0] == 0x00)
                {
                    return stringBuilder.ToString();
                }
                else
                {
                    stringBuilder.Append(encoding.GetString(temp));
                }
            }
        }

        private uint SwapByteOrder(uint valueToSwap)
        {
            uint uvalue = valueToSwap;
            uint swapped =
                ((0x000000FF) & (uvalue >> 24)
                | (0x0000FF00) & (uvalue >> 8)
                | (0x00FF0000) & (uvalue << 8)
                | (0xFF000000) & (uvalue << 24)
                );
            return swapped;
        }

        private ushort SwapByteOrder(ushort valueToSwap)
        {
            var uvalue = valueToSwap;
            var swapped =
                ((0x00FF) & (uvalue >> 8)
                | (0xFF00) & (uvalue << 8)
                );
            return (ushort)swapped;
        }

        public string Type { get { return m_type; } }
        public uint SongAttributes { get { return m_songAttributes; } }
        public ushort DigidrumsSamples { get { return m_digidrumsSamples; } }
        public uint YmFrequency { get { return m_ymFrequency; } }

        public int FrameCount { get { return m_frameCount; } }
        public int FrameRate { get { return m_frameRate; } }
        public int FrameLoop { get { return m_frameLoop; } }

        public TimeSpan TotalTime { get { return m_totalTime; } }

        public string Title { get { return m_title; } }
        public string Artist { get { return m_artist; } }
        public string Comments { get { return m_comments; } }

        public byte[] Bytes { get { return m_bytes; } }
    }
}
