const express = require( 'express' );
const app = express();
const nunjucks = require( 'nunjucks' );
const routes = require('./routes');

var counter = 0;

app.listen(3000, function(){
	console.log('working');
})

//configuration calls

app.set('view engine', 'html');
app.engine('html', nunjucks.render); 
nunjucks.configure('views', {noCache: true}); 

// middleware

app.use(function(request, response, next){
	console.log('got request number ' + ++counter);

	next();
})

app.use('/', routes);

// app.get('/', function (request, response){

// 	response.sendFile(__dirname + '/index.html');

// });

// app.get('/index.html', function (request, response){

// 	response.sendFile(__dirname + '/index.html');

// });

// app.get('/news', function(request, response){
// 	response.send('news');
// })