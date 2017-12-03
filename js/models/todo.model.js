var Todo = Backbone.Model.extend({
    //Defaults todo attribute values
    defaults: {
        completed: false
    },
    initialize: function(){
        console.log('This model has been initialized');
        this.on('change', function(){
            console.log('Values for this model has changed')
        });
        this.on('change:title', function(){
            console.log('Title value for this model has changed');
        });
    },
    setTitle: function(newTitle){
        this.set('title', newTitle);
    },
    validate: function(attrs){
        if(attrs.title === undefined){
            return "Remember to set a title for your todo";
        }
    }
});

var myTodo = new Todo();
console.log('Line 25, instantiating a new Todo object was called');

myTodo.set('completed', true, {validate: true});
console.log('My attempt to change the completed attribute from false to true with validate equals true: ' + myTodo.get('completed'));

myTodo.set('title', 'The listener is triggered whenever an attribute value changes');
console.log('Title has changed: ' + myTodo.get('title'));

myTodo.set('completed', true, {validate: true});
console.log('Second attempt to change "Completed" attribute to true: ' + myTodo.get('completed'));

myTodo.set({
    title: 'Changing more than one attribute at the same time onl triggers the listner once',
    completed: true
});

myTodo.setTitle('Go fishing on Sunday');