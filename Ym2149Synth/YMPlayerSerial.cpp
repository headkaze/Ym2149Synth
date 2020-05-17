#include "YMPlayerSerial.h"

// http://leonard.oxg.free.fr/ymformat.html
// http://lynn3686.com/ym3456_tidy.html
const byte regMask[14] = { 0xff, 0x0f, 0xff, 0x0f, 0xff, 0x0f, 0x1f, 0xff, 0x1f, 0x1f, 0x1f, 0xff, 0xff, 0x0f };

const int ledPin = 13;

void YMPlayerSerialClass::begin()
{
    Ym.begin();

    Ym.setPortIO(1,1);

    for(int i=0;i<3;i++) {
        Ym.setPin(0,1);
        digitalWrite(13,HIGH);
        delay(60);
        Ym.setPin(0,0);
        digitalWrite(13,LOW);
        delay(60);
    }

    Ym.setPin(0,1);
    Ym.mute();

    Serial.begin(9600);
}

void YMPlayerSerialClass::update()
{
    while(Serial.available() < 16);

    digitalWrite(ledPin, led ^= 1);

    for(int i=0;i<14;i++)
        Ym.write(i, Serial.read() & regMask[i]);

    Serial.read();
    Serial.read();
}
