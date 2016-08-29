import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('recipe');
  },

  addNewRecipe: false,

  actions: {
    save(params) {
      var newRecipe = this.store.createRecord('recipe', params);
      newRecipe.save();
      this.transitionTo('admin');
    },

    recipeFormShow() {
      this.set('addNewRecipe', true);
    },

    update(recipe, params) {
      this.sendAction('update', recipe, params);
    },


    destroyRecipe(recipe) {
      recipe.destroyRecord();
      this.transitionTo('admin');
    }
  }
});
