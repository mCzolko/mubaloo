App = Ember.Application.create();

App.Router.map(function() {
  this.resource("stages", function () {
    this.route("stage", { path: "/:index" });
  });
});

App.NavigationView = Ember.View.extend({
  templateName: 'navigation'
});


App.StagesStageController = Ember.ObjectController.extend({

  jsonData: '',

  // Stage 1
  selectedTitle: localStorage.getItem('selectedTitle'),
  firstName: localStorage.getItem('firstName'),
  lastName: localStorage.getItem('lastName'),
  dateOfBirth: localStorage.getItem('dateOfBirth'),
  stageOneFields: ['selectedTitle', 'firstName', 'lastName', 'dateOfBirth'],
  // Stage 2
  currentLocation: localStorage.getItem('currentLocation'),
  currentDatetime: localStorage.getItem('currentDatetime'),
  stageTwoFields: ['currentLocation', 'currentDatetime'],
  // Stage 3
  userFeedback: localStorage.getItem('userFeedback'),
  stageThreeFields: ['userFeedback'],

  selectTitles: ['Mr', 'Mrs', 'Ms', 'Miss'],

  actions: {

    submitStageOne: function () {
      if (this.validateFields(this.stageOneFields)) {
        this.storeFields(this.stageOneFields);
        this.transitionToRoute('stages.stage', {index: 2});
      }
    },

    submitStageTwo: function () {
      if (this.validateFields(this.stageTwoFields)) {
        this.storeFields(this.stageTwoFields);
        this.transitionToRoute('stages.stage', {index: 3});
      }
    },

    submitStageThree: function () {
      if (this.validateFields(this.stageThreeFields)) {
        this.storeFields(this.stageThreeFields);

        // One big validation before doing next step
        if(this.validateFields(this.getAllFields())) {
          this.sendData();
        }
      }
    }

  },


  getAllFields: function() {
    return this.stageOneFields.concat(this.stageTwoFields, this.stageThreeFields);
  },


  getData: function() {
    var dataValues = {};
    var fields = this.getAllFields();

    fields.forEach(function (item) {
      dataValues[item] = this.get(item);
    }.bind(this));

    return dataValues;
  },


  sendData: function() {
    var data = this.getData();
    console.log(data);

    // We should store data or output JSON if there is no network coverage
    if(navigator.network.connection.type == Connection.NONE) {
      this.jsonData = JSON.stringify(data);
      this.transitionToRoute('stages.stage', {index: 4});
    }
  },


  storeFields: function (fields) {
    fields.forEach(function (item) {
      localStorage.setItem(item, this.get(item).trim());
    }.bind(this));
  },


  validateFields: function(fields) {
    errorFields = [];
    fields.forEach(function (item) {
      var value = this.get(item);

      if (!value || !value.trim()) {
        errorFields.push(item);
      }
    }.bind(this));

    if (errorFields.length) {
      alert('Please fill out this field(s): ' + errorFields.join(', '));
    }

    return !errorFields.length;
  }

});

App.StagesStageRoute = Ember.Route.extend({

  renderTemplate: function() {
    var index = 1;

    if (this.controller.model) {
      var index = this.controller.model.index.toString();
    }

    this.render('stage' + index);

    if (index == 2) {
      getLocation();
      setTimeout(datePickerInit, 1); // 'hack' -- It will be executed after render (common JS issue)
    }
  }

});


App.IndexRoute = Ember.Route.extend({
  redirect: function() {
    this.transitionTo('stages.stage', {index: 1});
  }
});
