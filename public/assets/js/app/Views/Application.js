define([
    'settings',
    'text!templates/application.tmpl',
    'text!/overzicht.json',
    'Views/Provincie',
    'Models/Provincie'
], function (settings, template, data, ProvincieView, ProvincieModel) {
    return Backbone.View.extend({
        template: _.template(template),

        events: {},

        initialize: function () {
            var applicationView = this;
            this.data = JSON.parse(data);
            this.provincieViews = [];
            this.data.kieslijsten.forEach(function (provincie) {
                applicationView.provincieViews.push(
                    new ProvincieView({
                        model: new ProvincieModel(provincie)
                    })
                );
            });
            this.render();
        },
        
        render: function () {
            var applicationView = this;
            this.$el.html(this.template(this));
            this.provincieViews.forEach(function (provincieView) {
                applicationView.$el.append(provincieView.$el);
            });
            return this;
        }
    });
});
