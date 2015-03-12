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
            this.model.get("lijsten").forEach(function (url) {
                var model = new LijstModel();
                model.url = url;
                provincieView.lijstViews.push(
                    new LijstView({
                        model: model
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
            this.$el.html(this.template(this));
            return this;
        }
    });
});
