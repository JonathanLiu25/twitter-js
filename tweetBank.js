const _ = require('lodash');

var data = [];

module.exports = { 
	add: add, 
	list: list, 
	find: find 
};


function add (name, content) {
  data.push({ name: name, content: content });
}

function list () {
	//returns new array, doesn't modify/mutate	
  return _.cloneDeep(data);
}

function find (properties) {
  return _.cloneDeep(_.filter(data, properties));

}


// _.filter(array, function(elem){ return elem % 2 === 0})


const randArrayEl = function(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
};

const getFakeName = function() {
  const fakeFirsts = ['Nimit', 'David', 'Shanna', 'Emily', 'Scott', 'Karen', 'Ben', 'Dan', 'Ashi', 'Kate', 'Omri', 'Gabriel', 'Joe', 'Geoff'];
  const fakeLasts = ['Hashington', 'Stackson', 'McQueue', 'OLogn', 'Ternary', 'Claujure', 'Dunderproto', 'Binder', 'Docsreader', 'Ecma'];
  return randArrayEl(fakeFirsts) + " " + randArrayEl(fakeLasts);
};

const getFakeTweet = function() {
  const awesome_adj = ['awesome', 'breathtaking', 'amazing', 'funny', 'sweet', 'cool', 'wonderful', 'mindblowing', 'impressive'];
  return "Fullstack Academy is " + randArrayEl(awesome_adj) + "! The instructors are just so " + randArrayEl(awesome_adj) + ". #fullstacklove #codedreams";
};

module.exports.add('Omri Berns', 'Hi');

for (let i = 0; i < 10; i++) {
  module.exports.add( getFakeName(), getFakeTweet() );

}

console.log(find( {name: 'Omri Berns'} ))
console.log(find( ['name', 'Omri Berns'] ));
console.log(find( {content: 'Hi'} ))