
#ifndef YMPlayerSerial_h
#define YMPlayerSerial_h

#include "Arduino.h"
#include "YM2149.h"

class YMPlayerSerialClass {
  public:
    YMPlayerSerialClass() {};

    void begin();
    void update();

  private:
    YM2149 Ym;
    int led = 0;
};


typedef YMPlayerSerialClass YMPlayerSerial;

#endif
