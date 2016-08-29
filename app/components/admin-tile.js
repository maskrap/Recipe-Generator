import Ember from 'ember';

export default Ember.Component.extend({

  actions: {
    update(recipe, params) {
      this.sendAction('update', recipe, params);
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

    delete(recipe) {
      if (confirm('Are you sure you want to delete this recipe?')) {
        this.sendAction('destroyRecipe', recipe);
      }
    },

    save() {
      var params = {
        name: this.get('name')? this.get('name') : "",
        cuisine: this.get('cuisine')? this.get('cuisine') : "",
        dish: this.get('dish')? this.get('dish') : "",
        time: this.get('time')? this.get('time') : "",
        serves: this.get('serves')? this.get('serves') : "",
        image: this.get('image')? this.get('image') : "",
        ingredients: this.get('ingredients')? this.get('ingredients') : "",
        instructions: this.get('ingredients')? this.get('ingredients') : "",
      };
      this.set('addNewRecipe', false);
      this.sendAction('save', params);
    }
  }
});
