const express = require('express');

const router = express.Router();
// could use one line instead: const router = require('express').Router();
const tweetBank = require('../tweetBank');



router.post('/', function (req, res) {
  if (!req.body) return res.sendStatus(400)
  res.send('welcome, ' + req.body.name)
})

router.use(express.static('public'));

router.get('/users/:name', function(req, res) {
  var name = req.params.name;
  var list = tweetBank.find( {name: name} );
  res.render( 'index', { tweets: list, showForm: true, value: name} );
});

router.get('/tweets/:userid',function(req, res) {
  var id = req.params.userid;
  var list = tweetBank.find( {userid: id} );
  res.render( 'index', { tweets: list } );
});

router.post('/tweets', function(req, res) {
  console.log(req.body);
  var name = req.body.name;
  var text = req.body.text;
  tweetBank.add(name, text);
  res.redirect('/');
});

router.get('/', function (req, res) {
  let tweets = tweetBank.list();
  res.render( 'index', { tweets: tweets, showForm: true } );
});

// router.get('/stylesheets/style.css', function(req,res){
//   res.sendFile('/stylesheets/style.css');
// });

module.exports = router;
