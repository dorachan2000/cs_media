var express = require('express');
var app = express();
const bodyParser = require('body-parser');
const slackCtrl = require('./slackCtrl');
const twilioCtrl = require('./twilioCtrl');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(__dirname +'./../'));

port = process.env.PORT || 3000
app.get('/', slackCtrl.handleGet);
app.post('/', slackCtrl.handlePost);
app.post('/phone', twilioCtrl.handlePost);
app.listen(port) 

console.log('server port: ', port)