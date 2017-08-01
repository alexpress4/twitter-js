const express = require('express');
const nunjucks = require('nunjucks');
const app = express();
const routes = require('./routes');
app.use('/', routes);


app.use(function (req, res, next) {
    console.log(req.method, req.originalUrl);
    // console.log("This is the RESPONSE object: ", res.method, res.originalUrl);
    next();
});

app.listen(3000, function(){
  console.log('server listening');
});
//
// app.get('/news', function(req, res){
//   res.send('news');
// });

// app.get('/', function(req, res){
//   res.send('Welcome');
// });

var locals = {
    title: 'An Example',
    people: [
        { name: 'Gandalf'},
        { name: 'Frodo' },
        { name: 'Hermione'}
    ]
};

nunjucks.configure('views', {noCache: true})

// nunjucks.render('index.html', locals, function(err, output){
//   console.log(output);
// });

app.set('view engine', 'html'); // have res.render work with html files
app.engine('html', nunjucks.render); // when giving html files to res.render, tell it to use nunjucks
nunjucks.configure('views'); // point nunjucks to the proper directory for templates

const people = [{name: 'Full'}, {name: 'Stacker'}, {name: 'Son'}];
// app.get('/', function(req, res){
//   res.render( 'index', {title: 'Hall of Fame', people: people} );
// });
