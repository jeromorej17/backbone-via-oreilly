// We creat two DOM Elements representing buttons
// which could easily be continers or something else
var button1 = $('<button></button>');
var button2 = $('<button></button>');

//Define a view
var View = Backbone.View.extend({
    events: {
        click: function(e){
            console.log("View's element: " + view.el + "; element target: " + e.target);            
            console.log(view.el === e.target);
        }
    }
});

// create a new instance of the view, applying it to button1
var view = new View({el: button1});

//apply the view to button2 using setElement
view.setElement(button2);


button1.trigger('click');
button2.trigger('click');