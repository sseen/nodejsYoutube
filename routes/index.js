var express = require('express');
var router = express.Router();
var pythonSehll = require('python-shell');
var options = {
    mode: 'json',
    pythonOptions: ['-u'],
    scriptPath: './'
};

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/getUrl', function (req, res) {
  var page2 = req.param('u2url');
  var content = '';

  var test =  new PythonShell('test.py', options);
  test.on('message',function (message) {
      console.log(message);
  });

  res.send(content );

});

module.exports = router;
