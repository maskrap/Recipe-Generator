import Ember from 'ember';

export default Ember.Service.extend({
  recipes: [],

  add(recipe) {
    this.get('recipes').pushObject(recipe);
  },

  remove(recipe, index) {
    this.get('recipes').splice(index, 1);
    return this.get('recipes');
  }
});
