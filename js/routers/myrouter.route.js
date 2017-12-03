MyRouter = Backbone.Router.extend({
    model: null,
    initialize: function(options) {
        this.model = options.model;
        this.route('hello', 'sayHello', function(){
            console.log('callback invoked');
        });
    },
    routes:  {'' : 'start',
                'hello/:name(/:skill)' : 'sayHello',
                'book(/:name)': 'displayBook',
                '*default': 'defaultRoute',
        },  

    start: function() {
        console.log('Initial route invoked');        
    },

    displayBook: function(name){
        console.log('Displaying ' + name); 
        this.model.set('currentBook', name);      
    },

    defaultRoute: function(){
        console.log('Router does not handle this route');
    },
    
    sayHello: function(name, skill){
        if(skill !== null){
            console.log('Saying hello to ' + name + ' ' + skill + ' author');
        } else {
            console.log('Saying hello to ' + name);
        }        
    }
});

var router = new MyRouter();

function showBook(name){
    console.log('Show book ' + name);
     router.navigate('book/'+name, {trigger: true});
}

showBook('Backbone');

Backbone.history.start();