var express = require('express');
var app = express();
var bodyParser = require('body-parser');

var ECT = require('ect');
var ectRenderer = ECT({ watch: true, root: __dirname + '/views', ext : '.ect' });

app.set('view engine', 'ect');
app.engine('ect', ectRenderer.render);

app.use(express.static('static'));

var messages = ["Hello, this first message!"];
 
app.get('/', function (req, res){
  res.render('index', {messages: messages});
});

// create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false });

// POST /login gets urlencoded bodies
app.post('/', urlencodedParser, function (req, res){
  if (!req.body) return res.sendStatus(400);
	console.log("get post!"+req.body.message);
  messages.push(req.body.message);
  res.render('index', {messages: messages});
});

app.listen(3001, function () {
  console.log('Example app listening on port 3001!');
});