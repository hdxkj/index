#VCC连接: Arduino 5V(说明书上写3.3V-5V，我的硬件只在5V下正常工作)
#GND连接: Arduino GND
#OUT连接: Digital 13

int PIN_SENSOR = 13;

void setup() {
  pinMode(PIN_SENSOR, INPUT);
  Serial.begin(9600);
}

void loop() {
  int x = digitalRead(PIN_SENSOR);
  Serial.println(x);
}


