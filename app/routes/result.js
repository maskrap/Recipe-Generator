import Ember from 'ember';

export default Ember.Route.extend({

  model: function(params) {
    console.log(params.cuisine);
    return this.store.query('recipe', {
      orderBy: 'cuisine' || 'dish',
      equalTo: params.cuisine.split(', ')[0] || params.cuisine.split(', ')[1],
    });
  }
});
