#连接：
#电机驱动模块IN1-IN4 接单片机: IN1-D6 IN2-D7 IN3-D4 IN4-D5
#电机驱动模块GND 接电源GND 和 单片机GND
#电机驱动模块VCC 接电源VCC
#电机驱动模块+5 接单片机 VIN
#电机驱动模块OUT1-OUT2接步进电机1,OUT3-OUT4 接步进电机2


#define PIN_CAR_IN1 5
#define PIN_CAR_IN2 6
#define PIN_CAR_IN3 9
#define PIN_CAR_IN4 10

void doForward() {
  digitalWrite(PIN_CAR_IN3,LOW);
  digitalWrite(PIN_CAR_IN4,HIGH);
  digitalWrite(PIN_CAR_IN1,LOW);
  digitalWrite(PIN_CAR_IN2,HIGH);
}

void doBackward() {
  digitalWrite(PIN_CAR_IN3,HIGH);
  digitalWrite(PIN_CAR_IN4,LOW);
  digitalWrite(PIN_CAR_IN1,HIGH);
  digitalWrite(PIN_CAR_IN2,LOW);
}

void doStop() {
  digitalWrite(PIN_CAR_IN3,LOW);
  digitalWrite(PIN_CAR_IN4,LOW);
  digitalWrite(PIN_CAR_IN1,LOW);
  digitalWrite(PIN_CAR_IN2,LOW);

  digitalWrite(PIN_CAR_IN3,HIGH);
  digitalWrite(PIN_CAR_IN4,HIGH);
  digitalWrite(PIN_CAR_IN1,HIGH);
  digitalWrite(PIN_CAR_IN2,HIGH);
}

void doLeft() {
  digitalWrite(PIN_CAR_IN3,HIGH);
  digitalWrite(PIN_CAR_IN4,LOW);
  digitalWrite(PIN_CAR_IN1,LOW);
  digitalWrite(PIN_CAR_IN2,HIGH);   
}

void doRight() {
  digitalWrite(PIN_CAR_IN3,LOW);
  digitalWrite(PIN_CAR_IN4,HIGH);
  digitalWrite(PIN_CAR_IN1,HIGH);
  digitalWrite(PIN_CAR_IN2,LOW);
}

void setup()
{
  pinMode(PIN_CAR_IN1,OUTPUT);
  pinMode(PIN_CAR_IN2,OUTPUT);
  pinMode(PIN_CAR_IN3,OUTPUT);
  pinMode(PIN_CAR_IN4,OUTPUT);

  digitalWrite(PIN_CAR_IN1, OUTPUT);
  digitalWrite(PIN_CAR_IN2, OUTPUT);
  digitalWrite(PIN_CAR_IN3, OUTPUT);
  digitalWrite(PIN_CAR_IN4, OUTPUT);

  Serial.begin(9600);
}

void loop()
{
  doForward();
  delay(1000);  
  doStop();
  delay(1000);
  doBackward();
  delay(1000);
  doStop();
  delay(1000);  
  doLeft();
  delay(1000);  
  doStop();
  delay(1000);
  doRight();
  delay(1000);
  doStop();
  delay(1000); 
}


