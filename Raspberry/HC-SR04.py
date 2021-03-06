#!/usr/bin/python2
#coding=utf-8
'''
VCC-5V输入，Trig控制输入端32，Echo信号输出端36，GND，
'''

import RPi.GPIO as GPIO
import time

def init():
	GPIO.setmode(GPIO.BOARD)
	GPIO.setup(32, GPIO.IN)
	GPIO.setup(36, GPIO.OUT, initial=GPIO.LOW)

def getdistance():
	GPIO.output(36, GPIO.HIGH)
	# 等待10us以上
	i = 0
	i += 1
	GPIO.output(36, GPIO.LOW)
	while GPIO.input(32) == GPIO.LOW:
			pass
	# 从高电平开始计时
	start = time.time()
	while GPIO.input(32):
			pass
	end = time.time()
	print 'time:', end-start
	return (end - start) * 340 / 2

if __name__ == "__main__":
	try:
			init()
			print getdistance()
	except KeyboardInterrupt, e:
			pass
	finally:
			GPIO.cleanup()



