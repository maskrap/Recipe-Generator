import Ember from 'ember';

export default Ember.Route.extend({
  favoritesList: Ember.inject.service('favorites-list'),
  model: function(params) {
    return this.store.findRecord('recipe', params.recipe_id);
  },
  actions: {
    remove(recipe) {
      this.get('favoritesList').remove(recipe);
    },
    empty(recipe) {
      this.get('favoritesList').empty(recipe);
    },
    addToFav(recipe) {
      this.get('favoritesList').add(recipe);
      console.log(this.get('favoritesList'));
    },
    saveComment(params) {
      var newComment = this.store.createRecord('comment', params);
      var recipe = params.recipe;
      recipe.get('comments').addObject(newComment);
      newComment.save().then(function() {
        return recipe.save();
    });
      this.transitionTo('recipe', params.recipe);
    },
  }
});
