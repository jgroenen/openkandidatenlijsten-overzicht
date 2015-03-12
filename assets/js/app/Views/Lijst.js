define([
    'settings',
    'text!templates/lijst.tmpl',
    'Collections/Kandidaten'
], function (settings, template, KandidatenCollection) {
    return Backbone.View.extend({
        template: _.template(template),

        events: {
            "click h3": "expand"
        },

        initialize: function () {
            this.kandidaten = null;
            this.render();
        },
        
        expand: function () {
            var LijstView = this;
            if (!this.kandidaten) {
                this.kandidaten = new KandidatenCollection();
                this.kandidaten.url = this.model.get("url");
                this.kandidaten.fetch();
                this.kandidaten.on("sync", this.render, this);
            }
            this.$(".kandidaten").toggle();
        },
        
        render: function () {
            this.$el.html(this.template(this));
            return this;
        }
    });
});
