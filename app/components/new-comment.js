import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    saveComment() {
      var params = {
        name: this.get('name'),
        comment: this.get('comment'),
        rating: parseInt(this.get('rating')),
        recipe: this.get('recipe'),
      };
      this.sendAction('saveComment', params);
    },
  }
});
