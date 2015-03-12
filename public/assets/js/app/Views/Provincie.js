define([
    'settings',
    'text!templates/provincie.tmpl',
    'Views/Lijst',
    'Models/Lijst'
], function (settings, template, LijstView, LijstModel) {
    return Backbone.View.extend({
        template: _.template(template),

        events: {
            "click h2": "expand"
        },

        initialize: function () {
            var provincieView = this;
            this.expanded = false;
            this.lijstViews = [];
            this.model.get("lijsten").forEach(function (lijst) {
                provincieView.lijstViews.push(
                    new LijstView({
                        model: new LijstModel(lijst)
                    })
                );
            });
            this.render();
        },
        
        expand: function () {
            if (this.expanded) return;
            
            this.expanded = true;
        },
        
        render: function () {
            var provincieView = this;
            this.$el.html(this.template(this));
            this.lijstViews.forEach(function (lijstView) {
                provincieView.$el.append(lijstView.$el);
            });
            return this;
        }
    });
});
