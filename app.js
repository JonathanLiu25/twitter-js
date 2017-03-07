const express = require( 'express' );
const app = express();
const nunjucks = require( 'nunjucks' );

var counter = 0;

var locals = {
	title: 'An Example',
	people: [
		{ name: 'Gandalf'},
		{ name: 'Frodo'},
		{ name: 'Hermione'}

	]
};

app.set('view engine', 'html');
app.engine('html', nunjucks.render); 
nunjucks.configure('views', {noCache: true}); 

app.listen(3000, function(){
	console.log('working');
})

//custom logging middleware
app.use(function(request, response, next){
	console.log('got request number ' + ++counter);

	response.render( 'index', locals);
	next();
})

app.get('/', function (request, response){

	response.sendFile(__dirname + '/index.html');

});

app.get('/index.html', function (request, response){

	response.sendFile(__dirname + '/index.html');

});

app.get('/news', function(request, response){
	response.send('news');
})