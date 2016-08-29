import Ember from 'ember';

export default Ember.Service.extend({
  recipes: [],

  add(recipe) {
    this.get('recipes').pushObject(recipe);
  },

  remove(recipe) {
    this.get('recipes').removeObject(recipe);
  },

  empty() {
    this.get('recipes').clear();
  },

});
