const slackCtrl = require('./slackCtrl');
const twilioCtrl = require('./twilioCtrl');


const tasks = []
const taskHandler = {
  debugGet(req, res) {
    console.log('get')
    console.log('param: ', req.params)
    console.log('body: ', req.body)
    console.log('ip: ', req.ip)
    res.send('got')
  },
  debugPost(req, res) {
    console.log('post')
    console.log('param: ', req.params)
    console.log('body: ', req.body)
    console.log('ip: ', req.ip)
    res.send('posted')
  },
  handleGet(req, res){
    res.send([req.path, JSON.stringify(tasks)])
  },
  handlePost(req, res){
    let task
    console.log(req.path)
    switch(req.path) {
      case '/elevator':
        task = { command: 'elevator'}
        tasks.push(task)
        twilioCtrl.handlePost(req, res)
        console.log('elevator')
        break;
      case '/say':
        task = { command: 'elevator', value: 'hello'}
        tasks.push(task)
        res.send('say')
        break;
      default:
        res.status(404).send()
    }
  }
};

module.exports = taskHandler;
