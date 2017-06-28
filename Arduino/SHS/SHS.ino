#VCC接 Arduino 3.3V或5V
#GND接 Arduino GND
#AO 接 ArduinoAnalog
#DO接 Arduino Digital 4
#define PIN_AO 2
#define PIN_DO 4

void setup() {  
  pinMode(PIN_AO, INPUT);
  pinMode(PIN_DO, INPUT);  
  Serial.begin(9600);  
}  

void loop() {
  Serial.print("AO=");  
  Serial.print(analogRead(PIN_AO));
  Serial.print(", DO=");  
  Serial.println(digitalRead(PIN_DO));
  delay(500);  
} 

