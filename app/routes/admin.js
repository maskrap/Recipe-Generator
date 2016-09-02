import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('recipe');
  },
  favoritesList: Ember.inject.service(),

  actions: {
    save(params) {
      var newRecipe = this.store.createRecord('recipe', params);
      newRecipe.save();
      this.transitionTo('admin');
    },

    update(recipe, params) {
      Object.keys(params).forEach(function(key) {
        if(params[key]!==undefined) {
          recipe.set(key,params[key]);
        }
      });
      recipe.save();
      this.transitionTo('admin');
    },

    destroyRecipe(recipe) {
      recipe.destroyRecord();
      this.transitionTo('admin');
    }
  }
});
