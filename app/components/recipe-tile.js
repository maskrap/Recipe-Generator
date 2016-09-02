import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    addToFav(recipe) {
      this.sendAction('addToFav', recipe);
    },
  }
});
