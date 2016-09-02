import Ember from 'ember';

export default Ember.Component.extend({
  favoritesList: Ember.inject.service(),

  actions: {
    remove(recipe, index) {
      this.get('favoritesList').remove(recipe, index);
      this.sendAction('reload', recipe);
    }
  }
});
