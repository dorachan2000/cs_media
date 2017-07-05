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
app.get('/', taskHandler.handleGet);
app.post('/', taskHandler.handlePost);
app.post('/phone', twilioCtrl.handlePost);
app.listen(port) 

// /
// debug get and post

// /elevator
// /say
  // taskHandler
    // case elevator
    // add task for slackbot 
    // send text
    //  
    // case say
    // add task for slackbot 
// /phone

console.log('server port: ', port)