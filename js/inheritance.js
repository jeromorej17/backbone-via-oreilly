var com = com || {};
com.homedepot = com.homedepot || {};
com.homedepot.chapterone = com.homedepot.chapterone || {};

com.homedepot.chapterone.Animal = function Animal(name){
	this.name = name;
}

com.homedepot.chapterone.Animal.prototype.talk = function(){
	console.log(this.phrase);
}

com.homedepot.chapterone.Dog = function Dog(phrase){
	this.phrase = phrase;
	this.constructor('Bullseye');
}

com.homedepot.chapterone.Dog.prototype = new com.homedepot.chapterone.Animal();

com.homedepot.chapterone.Dog.prototype.talk = function(){
	console.log('The dog says');
	com.homedepot.chapterone.Animal.prototype.talk.call(this);
}

com.homedepot.chapterone.Dog.prototype.toString = function(){
	return this.name;
}

var bulldog = new com.homedepot.chapterone.Dog('Mean to the bone');
bulldog.talk();
console.log('What is bulldog name? ' + bulldog.name );
console.log(bulldog instanceof com.homedepot.chapterone.Animal);
console.log(com.homedepot.chapterone.Animal.prototype);
console.log(com.homedepot.chapterone.Dog.prototype);
console.log(bulldog.toString());

var pinkycat = Object.create(com.homedepot.chapterone.Animal.prototype, {
	'legs': {value: 4, writable: true},
	'meow': {value: true, writable: false}
});

console.log(pinkycat.talk);
