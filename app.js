const express = require('express');
const app = express();

app.use(function (req, res, next) {
    console.log(req.method, req.originalUrl);
    // console.log("This is the RESPONSE object: ", res.method, res.originalUrl);
    next();
});

app.listen(3000, function(){
  console.log('server listening');
});

app.get('/news', function(req, res){
  res.send('news');
});

app.get('/', function(req, res){
  res.send('Welcome');
});
