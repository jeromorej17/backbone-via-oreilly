AppModel = Backbone.Model.extend({
    defaults: {
        currentBook: 'Beginning Backbone',
    },
    initialize: function() {
        this.on('change', function(){
            if(this.hasChanged('currentBook')){
                alert('Current book changed!')
            }
        });
    },
});