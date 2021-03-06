import Ember from 'ember';

export default Ember.Component.extend({
  favoritesList: Ember.inject.service(),

  actions: {
    addToFav(recipe) {
      this.sendAction('addToFav', recipe);
    },
  }
});
