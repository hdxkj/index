#GND(棕色)接 Arduino GND
#PWM(橙色)接 Arduino Digital 10
#VCC(红色)接 Arduino 5V

#include <Servo.h>

#define PIN_SERVO 10
Servo myservo;

void setup()
{
  myservo.attach(PIN_SERVO);
}

void loop()
{
  myservo.write(0);
  delay(1000);
  myservo.write(80);
  delay(1000);
  myservo.write(160);
  delay(1000);
  myservo.write(80);
  delay(1000);
  myservo.write(0);
  delay(1000);
}


