import Ember from 'ember';

export default Ember.Component.extend({
  addNewRecipe: false,
  actions: {
    recipeFormShow() {
      this.set('addNewRecipe', true);
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
        instructions: this.get('instructions')? this.get('instructions') : "",
      };
      this.set('addNewRecipe', false);
      this.sendAction('save', params);
    }
  }
});
