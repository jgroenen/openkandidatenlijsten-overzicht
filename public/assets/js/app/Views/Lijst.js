define([
    'settings',
    'text!templates/lijst.tmpl'
], function (settings, template) {
    return Backbone.View.extend({
        template: _.template(template),

        events: {},

        initialize: function () {
            this.render();
        },
        
        render: function () {
            this.$el.html(this.template(this));
            return this;
        }
    });
});
