//Define the Library view
LibraryView = Backbone.View.extend({
   // libraryTpl: _.template($("#library-template").html()),
    libraryTpl: Handlebars.compile($("#library-template").html()),   

    initialize: function(){
        console.log('View created');
        this.render();
    },
    render: function(){
        var self = this;
        var output = self.libraryTpl({'library': self.collection.toJSON()});
        self.$el.append(output);    
        return self;
    },
    events: {
        'click #myLibraryViewSection' : 'alertBook'
    },
    alertBook: function(e){
        alert('Book clicked: ' + e.target);
    },
    
});

//create an instance of the view
var myView = new LibraryView({
    collection: myLibrary,
    el: '#myLibraryViewSection' 
});

console.log(myView.el);

//Create a view that build its own DOM Element
 var myNewView = new LibraryView({
    model: thisBook,
    tagName: 'ul',
    className: 'libraryview',
    id: 'library',
    attributes: {'data-date': new Date()}
});

console.log(myNewView.el);

