// const Student = require('./StudentModel');

const slackCtrl = {
  handleGet(req, res) {
    console.log('create', req.body)
    console.log('get')
    console.log(req.params)
    console.log(req.body)
    res.send('got')
  },
  handlePost(req, res) {
    console.log('post')
    console.log('param: ', req.params)
    console.log('body: ', req.body)
    console.log('ip: ', req.ip)
    res.send('posted')
  }
};

module.exports = slackCtrl;
