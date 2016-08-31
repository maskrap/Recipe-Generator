import Ember from 'ember';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';

export default Ember.Route.extend(AuthenticatedRouteMixin, {
  model() {
    return this.store.findAll('recipe');
  },

  actions: {
    save(params) {
      var newRecipe = this.store.createRecord('recipe', params);
      newRecipe.save();
      this.transitionTo('admin');
    },

    update(recipe, params) {
      Object.keys(params).forEach(function(key) {
        if(params[key]!==undefined) {
          recipe.set(key,params[key]);
        }
      });
      recipe.save();
      this.transitionTo('admin');
    },

    destroyRecipe(recipe) {
      recipe.destroyRecord();
      this.transitionTo('admin');
    }
  }
});
