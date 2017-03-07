const express = require('express');
const router = express.Router();
const tweetBank = require('../tweetBank');
const bodyParser = require('body-parser');



// router.use(express.bodyParser());

router.use(bodyParser.urlencoded({ extended: false }))
router.use(bodyParser.json());


router.use(express.static('public'));

router.get( '/tweets/:id', function(request, response){
	var tweetID = parseInt(request.params.id);
	var tweets = tweetBank.find( {id: tweetID} );
	response.render( 'index', {tweets: tweets} );
});

router.get( '/users/:name', function(request, response){
	var name = request.params.name;
	var tweets = tweetBank.find( {name: name} );
	response.render( 'index', {tweets: tweets, showForm: true, name: name} );
});

router.get('/', function(request, response){
	var tweets = tweetBank.list();
	response.render( 'index', {tweets: tweets, showForm: true} );
});

router.post('/tweets', function(request, response) {

  var name = request.body.name;
  var text = request.body.text;
  tweetBank.add(name, text);

  response.redirect('/');
});

module.exports = router;

// router.get('/', function(requestion, response){

// })