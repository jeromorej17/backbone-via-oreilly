var Person = new Backbone.Model({name: 'Samuel'});

// Validate the model name
Person.validate = function(attrs){
    if(!attrs.name){
        return 'I need your name';
    }
};

//Change the name
Person.set({name: 'Jeremy'}, {silent: true});
console.log(Person.get('name'));

console.log(!Person.hasChanged(0));
console.log(Person.hasChanged(''));

// Remove the name to force validation
Person.unset('name', {validate: true});