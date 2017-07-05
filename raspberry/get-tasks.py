import requests, json, os
import time
from espeak import espeak
from datetime import datetime as dt
# get absolute file path for this directory
root = os.path.dirname(os.path.realpath(__file__))

aws = "http://ec2-34-212-61-95.us-west-2.compute.amazonaws.com:3000/tasks"
loop_timer = 3
i = 0
message_elev = "get elevator pleeeeease"
while True:
	print (i)
	time.sleep(loop_timer)
	res = requests.get(aws)
	i += 1
	task_list = res.json
	if len(task_list) <= 0:
		continue
	command = task_list[0]['command']
	if (command == 'say'):
		message = task_list[0]['message']
	
	print command
	print message
	espeak.synth(value)