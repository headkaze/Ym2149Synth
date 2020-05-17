using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.IO;
using System.IO.Compression;
using System.IO.Ports;
using System.Linq;
using System.Reflection;
using System.Runtime.InteropServices;
using System.Text;
using System.Threading;
using System.Threading.Tasks;

namespace YMPlayer
{
    class Program
    {
        [DllImport("Kernel32")]
        private static extern bool SetConsoleCtrlHandler(EventHandler handler, bool add);

        private delegate bool EventHandler(int sig);

        private static YMParser m_ymParser = null;
        private static SerialPort m_serialPort = null;
        private static Timer m_timer = null;

        private static string[] m_songArray = null;
        private static int m_songIndex = 0;
        private static int m_frameIndex = 0;

        private const int PACKET_SIZE = 16;
        private const int PACKET_WRITE_COUNT = 4;
        private const int PACKET_WRITE_SIZE = (PACKET_WRITE_COUNT * PACKET_SIZE);

        private static EventHandler m_exitEventHandler;

        public static void Main(string[] args)
        {
            m_exitEventHandler += OnExit;
            SetConsoleCtrlHandler(m_exitEventHandler, true);

            string startupPath = Path.GetDirectoryName(Assembly.GetExecutingAssembly().Location);
            string songsPath = Path.Combine(startupPath, "Songs");

            m_songArray = Directory.GetFiles(songsPath, "*.YM");

            Random random = new Random();
            m_songArray = m_songArray.OrderBy(x => random.Next()).ToArray();

            Console.WriteLine("YMPlayer, simple streamer for YM2149.");
            Console.WriteLine("Opening file");

            Console.WriteLine("Opening serial port");
            m_serialPort = new SerialPort("COM4", 9600);
            m_serialPort.Open();

            m_ymParser = new YMParser(m_songArray[m_songIndex]);

            OutputYmInfo();

            StartTimer();

            while (true) ;
        }

        private static void OnTimer(object state)
        {
            m_serialPort.Write(m_ymParser.Bytes, m_frameIndex * PACKET_WRITE_SIZE, Math.Min(Math.Max(m_ymParser.Bytes.Length - m_frameIndex * PACKET_WRITE_SIZE, 0), PACKET_WRITE_SIZE));

            TimeSpan timeSpan = TimeSpan.FromSeconds((((m_frameIndex + 1) * PACKET_WRITE_COUNT) / m_ymParser.FrameRate));

            Console.Write("\r{0}/{1} - Frame {2}/{3}    ", timeSpan.ToString(), m_ymParser.TotalTime, (m_frameIndex + 1) * PACKET_WRITE_COUNT, m_ymParser.FrameCount);

            if ((++m_frameIndex * PACKET_WRITE_COUNT) >= (m_ymParser.FrameCount - 1))
            {
                // m_frameIndex = m_ymParser.FrameLoop;

                StopTimer();

                if (++m_songIndex == m_songArray.Length)
                    m_songIndex = 0;

                m_ymParser = new YMParser(m_songArray[m_songIndex]);

                OutputYmInfo();

                StartTimer();
            }
        }

        private static void StopTimer()
        {
            m_timer.Change(Timeout.Infinite, Timeout.Infinite);
        }

        private static void StartTimer()
        {
            m_frameIndex = 0;
            m_timer = new Timer(OnTimer, null, 0, (int)Math.Round((PACKET_WRITE_COUNT * 1.0 / m_ymParser.FrameRate) * 1000.0));
        }

        private static void OutputYmInfo()
        {
            Console.WriteLine("--------------------------------------------");
            Console.WriteLine("Type: " + m_ymParser.Type);
            Console.WriteLine("Frame Count: " + m_ymParser.FrameCount);
            Console.WriteLine("Song Attributes: " + m_ymParser.SongAttributes);
            Console.WriteLine("Digidrums Samples: " + m_ymParser.DigidrumsSamples);
            Console.WriteLine("YM Frequency: " + m_ymParser.YmFrequency + "Hz");
            Console.WriteLine("Frame Rate: " + m_ymParser.FrameRate + "Hz");
            Console.WriteLine("Loop Frame Number: " + m_ymParser.FrameLoop);
            Console.WriteLine();
            Console.WriteLine("Title: " + m_ymParser.Title);
            Console.WriteLine("Artist: " + m_ymParser.Artist);
            Console.WriteLine("Comments: " + m_ymParser.Comments);
        }

        private static bool OnExit(int sig)
        {
            if (m_timer != null)
            {
                m_timer.Dispose();
                m_timer = null;
            }

            if (m_serialPort != null)
            {
                byte[] output = new byte[16];

                Array.Clear(output, 0, output.Length);

                m_serialPort.Write(output, 0, 16);
                m_serialPort.Dispose();
                m_serialPort = null;
            }

            return false;
        }
    }
}
