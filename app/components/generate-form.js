import Ember from 'ember';

export default Ember.Component.extend({
  getStarted: true,
  stepOne: false,
  stepTwo: false,
  confirmation: false,
  cuisines: ['European','Asian','American','Latin'],
  defaultCuisine: 'European',
  temperatures: ['Hot','Cold'],
  defaultTemperature: 'Hot',

  actions: {
    start() {
      this.set('stepOne', true);
      this.set('getStarted', false);
    },
    stepOne() {
      this.set('stepTwo', true);
      this.set('stepOne', false);
    },
    chooseCuisine(cuisine) {
      this.set('defaultCuisine', cuisine);
    },
    chooseTemperature(temperature) {
      this.set('defaultTemperature', temperature);
    },
    stepTwo() {
      this.set('stepTwo', false);
      this.set('confirmation', true);
    },
    generate() {
      this.sendAction('generate', this.get('defaultCuisine'), this.get('defaultTemperature'));
    }
  }
});
