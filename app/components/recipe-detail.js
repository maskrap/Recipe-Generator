import Ember from 'ember';

export default Ember.Component.extend({
  favoritesList: Ember.inject.service(),

  ingredients: Ember.computed('recipe.ingredients', function(){
    return this.get('recipe.ingredients').split(', ');
  }),

  actions: {
  addToFav(recipe) {
    this.sendAction('addToFav', recipe);
  },
}
});
