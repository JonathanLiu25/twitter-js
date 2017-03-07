const express = require('express');
const router = express.Router();
const tweetBank = require('../tweetBank');
const bodyParser = require('body-parser');

router.use(express.static('public'));

router.get( '/tweets/:id', function(request, response){
	var tweetID = parseInt(request.params.id);
	var tweets = tweetBank.find( {id: tweetID} );
	response.render( 'index', {tweets: tweets} );
});

router.get( '/users/:name', function(request, response){
	var person = request.params.name;
	var tweets = tweetBank.find( {name: person} );
	response.render( 'index', {tweets: tweets} );
});

router.get('/', function(request, response){
	var tweets = tweetBank.list();
	response.render( 'index', {tweets: tweets} );
});

module.exports = router;

// router.get('/', function(requestion, response){

// })