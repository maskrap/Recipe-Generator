import Ember from 'ember';

export default Ember.Route.extend({
  favoritesList: Ember.inject.service(),

  model: function(params) {
    return this.store.query('recipe', {
      orderBy: 'cuisine' || 'dish',
      equalTo: params.cuisine.split(', ')[0] || params.cuisine.split(', ')[1],
    });
  }
});
