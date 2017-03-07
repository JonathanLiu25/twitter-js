const express = require( 'express' );
const app = express();
const nunjucks = require( 'nunjucks' );
const routes = require('./routes');
const socketio = require('socket.io');

var counter = 0;


var server = app.listen(3000, function(){
	console.log('working');
});

var io = socketio.listen(server);

//configuration calls

app.set('view engine', 'html');
app.engine('html', nunjucks.render); 
nunjucks.configure('views', {noCache: true}); 

// middleware

app.use(function(request, response, next){
	console.log('got request number ' + ++counter);

	next();
})

app.use('/', routes(io));

// app.get('/', function (request, response){

// 	response.sendFile(__dirname + '/index.html');

// });

// app.get('/index.html', function (request, response){

// 	response.sendFile(__dirname + '/index.html');

// });

// app.get('/news', function(request, response){
// 	response.send('news');
// })