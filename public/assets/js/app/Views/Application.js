define([
    'settings',
    'text!templates/application.tmpl',
    'text!/overzicht.json'
], function (settings, template, lijsten) {
    return Backbone.View.extend({
        template: _.template(template),

        events: {},

        initialize: function () {
            this.lijsten = JSON.parse(lijsten);
            this.render();
        },
        
        render: function () {
            this.$el.html(this.template(this));
            return this;
        }
    });
});
