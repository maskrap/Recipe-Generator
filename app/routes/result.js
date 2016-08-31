import Ember from 'ember';

export default Ember.Route.extend({
  favoritesList: Ember.inject.service(),
  temperature: '',

  model: function(params) {
    this.set('temperature', params.cuisine.split(', ')[1]);
    return this.store.query('recipe', {
      orderBy: 'cuisine',
      equalTo: params.cuisine.split(', ')[0]
    });
  }
});
