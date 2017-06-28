#VCC接 Arduino 3.3V
#GND接 Arduino GND
#OUT接 Digital 2


#define PIN_NUM 2

void setup()  {
  Serial.begin(9600);
  pinMode(PIN_NUM,INPUT);
}

void loop()  {
  if(digitalRead(PIN_NUM)==HIGH){
    Serial.println("Someone here!");
  }   
  else {
    Serial.println("Nobody");
  }
  delay(1000);
}


