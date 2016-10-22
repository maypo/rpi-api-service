var express    = require('express');
var app        = express();
var bodyParser = require('body-parser');

var markdown   = require('./markdown.js');


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var apiVersion = 'v1';
var port = process.env.PORT || 8080;
var helloJson = { "hello" : "world" };

var router = express.Router();

//routes for API
router.get('/', function(req, res) {
    markdown.getReadme(function(data){
      res.set('Content-Type', 'text/html');
      res.status(200).send(data).end();
    });
});

router.get('/hello', function(req, res) {
  res.set('Content-Type', 'application/json');
  res.status(200).send(helloJson).end();

});

//register route
app.use('/'+apiVersion, router);

//start server
app.listen(port);
