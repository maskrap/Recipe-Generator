import Ember from 'ember';

export default Ember.Route.extend({
actions: {
    generate(cuisine, temperature) {
      var params = cuisine + ', ' + temperature;
      this.transitionTo('result', params);
    }
  },
  favoritesList: Ember.inject.service(),

});
