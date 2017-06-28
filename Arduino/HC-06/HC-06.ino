#VCC：接Arduino的5V或者3.3V
#GND：接Arduino的GND
#TXD：发送端，接Arduino的RX
#RXD：接收端，接Arduino的TX

void setup()
{
  Serial.begin(9600);
}

void loop()
{
  while(Serial.available())
  {
    char c=Serial.read();
    Serial.println(c);
  }
} 
