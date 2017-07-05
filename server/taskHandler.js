const slackCtrl = require('./slackCtrl');
const twilioCtrl = require('./twilioCtrl');

const taskHandler = {
  handleGet(req, res) {
    console.log('get')
    console.log('param: ', req.params)
    console.log('body: ', req.body)
    console.log('ip: ', req.ip)
    res.send('got')
  },
  handlePost(req, res) {
    console.log('post')
    console.log('param: ', req.params)
    console.log('body: ', req.body)
    console.log('ip: ', req.ip)
    res.send('posted')
  },
  handleGet(req, res){

  }
};

module.exports = taskHandler;
