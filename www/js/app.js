App = Ember.Application.create();

App.Router.map(function() {
  this.route("stage", { path: "/stage/:index" });
});



App.IndexRoute = Ember.Route.extend({
    templateName: 'stage1',
    controllerName: 'stage'
});

App.NavigationView = Ember.View.extend({
  templateName: 'navigation'
});


App.StageRoute = Ember.Route.extend({

  setupController: function(controller, model) {
    controller.set('model', model);
  },

  renderTemplate: function() {
    var index = this.controller.model.index.toString();
    this.render('stage' + index);
  }

});
