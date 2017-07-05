var express = require('express');
var app = express();
const bodyParser = require('body-parser');
const slackCtrl = require('./slackCtrl');
const twilioCtrl = require('./twilioCtrl');
const taskHandler = require('./taskHandler')

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(__dirname +'./../'));

port = process.env.PORT || 3000
app.get('/', taskHandler.debugGet);
app.get('/tasks', taskHandler.handleGet);
app.get('/phone', twilioCtrl.handlePost);
app.post('/', taskHandler.debugPost);
app.post('/elevator', taskHandler.handlePost);
app.post('/say', taskHandler.handlePost);
app.listen(port) 

console.log('server port: ', port)