import Ember from 'ember';

export default Ember.Route.extend({
  favoritesList: Ember.inject.service(),
  model: function(params) {
    return Ember.RSVP.hash({
      recipes: this.store.query('recipe', {
        orderBy: 'cuisine',
        equalTo: params.cuisine.split(', ')[0]
      }),
      temperature: params.cuisine.split(', ')[1]
    });
  }
});
