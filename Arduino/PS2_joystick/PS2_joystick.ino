#5V接 Arduino 5V 
#GND接 Arduino GND
#URx接 Analog 0
#URy接 Analog 1
#SW 接 Digital 2

#define PIN_X 0  
#define PIN_Y 1  
#define PIN_Z 2  

void setup() {  
  pinMode(PIN_X, INPUT);
  pinMode(PIN_Y, INPUT);
  pinMode(PIN_Z, INPUT);
  Serial.begin(9600);
}  

void loop() {  
  int x,y,z;  

  x=analogRead(PIN_X);  
  y=analogRead(PIN_Y);  
  z=analogRead(PIN_Z);  

  Serial.print("X=");  
  Serial.print(x);   
  Serial.print("\tY=");     
  Serial.print(y);  
  Serial.print("\tZ=");     
  Serial.println(z);  

  delay(1000);  
}


