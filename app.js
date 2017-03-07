var counter = 0;

const express = require( 'express' );
const app = express();


app.listen(3000, function(){
	console.log('working');
})

//custom logging middleware
app.use(function(request, response, next){
	console.log('got request number ' + ++counter);

	//get request type;
	//log request type;

	console.log('response type: ' + response.status());

	next();
})



app.get('/', function (request, response){
	response.send('working');
});



app.get('/news', function(request, response){
	response.send('news');
})


