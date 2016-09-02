import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('recipe');
  },
  favoritesList: Ember.inject.service(),
  actions: {
    reload(recipe) {
      var recipe_id = recipe.id;
      this.transitionTo('recipe', recipe_id);
    }
  }
});
