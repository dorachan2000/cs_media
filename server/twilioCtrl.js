const apikey = require('/home/ec2-user/apikey')
const accountSid = apikey.twilio.sid
const authToken = apikey.twilio.token
var twilio = require('twilio');
var client = new twilio(accountSid, authToken);

const twilioCtrl = {
  handlePost(req, res) {
    console.log('post')
    console.log('param: ', req.params)
    console.log('body: ', req.body)
    console.log('ip: ', req.ip)
    res.send('posted')
    client.messages.create({
      body: 'Hello from Node',
      to: '+12134400126',  // Text this number
      from: '+12136872380' // From a valid Twilio number
    })
    .then((message) => console.log(message.sid));
  }
};

module.exports = twilioCtrl;
