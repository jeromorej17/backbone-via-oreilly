var TodoView = Backbone.View.extend({

    tagName: 'li',

    //cache the template function for a single item
    todoTpl: _.template("An example template"),

    events: {
        'dblclick label': 'edit',
        'keypress .edit': 'updateOnEnter',
        'blur .edit':  'close'
    },

    //Rerender the titles of the todo item
    render:  function(){
        this.$el.html(this.todoTpl(this.model.toJSON()));
        this.input = this.$(' .edit');
        return this;
    },

    edit: function(){
        // execute when todo label is double-clicked
    },

    close:  function(){
        // executed when todd loses focus
    },

    updateOnEnter:  function(){
        // executed on each keypress when in todao edit mode,
        // but we'll wait for enter to get in action
    }
});

var todoView = new TodoView();

// log reference to a DOM element that corresponses to the view instance
console.log(todoView.el);   // logs <li></li>