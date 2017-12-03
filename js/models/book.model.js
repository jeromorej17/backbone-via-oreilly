// Define a collection based on book
var Library = Backbone.Collection.extend({
    initialize: function(){
        console.log("Creating a new library collection");
    }
});

Backbone.on('model:useless', function(data){
        console.log('Model useless global invoked');
        console.log(data.model.get('name'));        
});

Book = Backbone.Model.extend({
    urlRoot: 'http://localhost:8080/index.html/',
    initialize: function(){
        console.log('a new book created');
        this.on('change', function(){
            console.log('Model change has detected:');
            if(this.hasChanged('name')){
                 console.log('The name attribute has changed')
            }
            if(this.hasChanged('author')){
                console.log('The author attribute has changed');
            }
            console.log('Changed attributes: ' + JSON.stringify(this.changed));
            console.log("Previouse change state: " + JSON.stringify(this.previousAttributes()));           
        });
        this.on("invalid", function(model, error){
                 console.log("**Validation Error : " + error + "**");
          });
        
    },
    defaults: {
        name: 'Beginning Backbone.js',
        author: 'Important Person'
    },
    printDetails: function(){
        console.log(thisBook.get('name') + ' by ' + thisBook.get('author'));
        
    },
    validate: function(attrs){
        if(attrs.year < 2000){
            return 'Year must be after 2000';
        }
        if(!attrs.name){
            return 'A name must be provided';
        }
    },
    parse: function(response, xhr){
        response.bookType = 'ebook';
        return response;
    }
  
});

var myBook = new Book();
console.log('The name of the book is: ' + myBook.get('name'));
myBook.set('author', 'William L Mackson');
console.log('The author of ' + myBook.get('name') + ' is ' + myBook.get('author'));

var thisBook = new Book({
    name: 'Advanced Backbone',
    author: 'James Surgie'
});



console.log(thisBook.attributes); // a JSON representation of all attributes
thisBook.set('name', 'Beginning JQueryJS');
console.log(thisBook.get('name'));
thisBook.set('year', 2013, {silent: true});
console.log('Book year ' + thisBook.get('year'));
thisBook.unset('year');
console.log('Book year ' + thisBook.get('year'));

//check for the existence of an attribute
var hasYear = thisBook.has('year'); //results in false
var hasName = thisBook.has('name'); //results in true
console.log('Has an attribute called year  : ' + hasYear);
console.log('Has an attribute called name  : ' + hasName);
console.log("Called printDetails function below");
// use the printDetails function
thisBook.printDetails();

//try setting the year to pre 2000
thisBook.set('year', 1999, {validate: true});
console.log('Check year change: ' + thisBook.get('year'));
// try removing the name from the Model
thisBook.unset('name', {validate:true});
console.log('Check if the name has been removed: ' + thisBook.get('name'));

//check if model is valid
console.log('Is model valid: ' + thisBook.isValid());
//break the validation rules by not using the validate flag
thisBook.set('year', 1998);
//check if the model is valid
console.log('Is model valid: ' + thisBook.isValid());

thisBook.save(thisBook.attributes, {
    success: function(model, response, options){
        console.log('Model save');
        console.log('Id: ' + thisBook.get('id'));
    },
    error:  function(model, xhr, options){
        console.log('Failed to save model');
    }
});

thisBook.fetch({
    success: function(model, response, options) {
        console.log('Fetch success');
    },
    error: function(model, response, options){
        console.log('Fetch error');
    }
});

thisBook.destroy({
    success: function(model, response, options){
        console.log('Destroy success');
    },
    error: function(model, response, options){
        console.log('Destroy error');
    },
    wait: true
});

EBook = Book.extend({
    getWebLink: function(){
        return 'http://www.apress.com/' +this.get('name');
    },
    printDetails: function(){
        console.log("And ebook");
        Book.prototype.printDetails.call(this);
    }
});

var ebook = new EBook({name: "Beginning Backbone", author: "James Surgrue"});
console.log(ebook.getWebLink());

var bookOne = new Book({name:  'Beginning Backbone', author: 'James Surgrue'});
var bookTwo = new Book({name: 'Pro Javascrip Design Patterns', author: 'Dustin Diaz, Rosss Harmes'});

var myLibrary = new Library([bookOne, bookTwo]);
console.log('Library contains ' + myLibrary.length + ' books');

var bookThree = new Book({name: 'Pro JQuery', author: 'Adam Freeman'});
var bookFour = new Book({name: 'Pro Javascript Performance', author: 'Tom Barker'});
myLibrary.add([bookThree, bookFour]);
console.log('Library has ' + myLibrary.size() + ' books');

thisBook.on('change:name change:author', function(model, value, options){
    if(model.get('name') === null && model.get('author') === null) {
        console.log('Trigger event now');
        Backbone.trigger('model:useless', {model:model});
    }
});

