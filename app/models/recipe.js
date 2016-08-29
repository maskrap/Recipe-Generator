import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr(),
  cuisine: DS.attr(),
  dish: DS.attr(),
  time: DS.attr(),
  serves: DS.attr(),
  ingredients: DS.attr(), //HAS MANY?
  instructions: DS.attr(), //HAS MANY?
  comments: DS.hasMany('comment', { async: true })
});
