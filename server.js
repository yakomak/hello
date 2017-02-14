var express = require('express');
var app = express();


var ECT = require('ect');
var ectRenderer = ECT({ watch: true, root: __dirname + '/views', ext : '.ect' });

app.set('view engine', 'ect');
app.engine('ect', ectRenderer.render);

app.use(express.static('static'));

app.get('/', function (req, res){
	var data = { title : 'Hello, World!' };
  res.render('index', data);
});

app.post('/', function (req, res){
	console.log("get post!");
  res.redirect("/");
  
});

app.listen(3001, function () {
  console.log('Example app listening on port 3001!');
});