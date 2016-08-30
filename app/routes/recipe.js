import config from '../config/environment';
import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
   var key = config.myApiKey;
   var url = 'http://www.supermarketapi.com/api.asmx/COMMERCIAL_SearchByProductName?APIKEY=' +key+ '&ItemName=' + params;
   return Ember.$.getJSON(url).then(function(responseJSON) {
     return responseJSON.results;
   });
  favoritesList: Ember.inject.service(),
  actions: {
    remove(recipe) {
      this.get('favoritesList').remove(recipe);
    },
    empty(recipe) {
      this.get('favoritesList').empty(recipe);
    },
    addToFav(recipe) {
      this.get('favoritesList').add(recipe);
    },
  }
});
