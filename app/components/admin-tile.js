import Ember from 'ember';

export default Ember.Component.extend({
  favoritesList: Ember.inject.service(),

  actions: {
    update(recipe, params) {
      this.sendAction('update', recipe, params);
    },
    //
    delete(recipe) {
      if (confirm('Are you sure you want to delete this recipe?')) {
        this.sendAction('destroyRecipe', recipe);
      }
    }
  }
});
