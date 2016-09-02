import config from '../config/environment';
import Ember from 'ember';

export default Ember.Component.extend({
  ingredientResult: Ember.computed('ingredient', function() {
    var key = config.myApiKey;
    var that = this;
    var ingredient = this.get('ingredient').toLowerCase();
    var url = 'http://www.supermarketapi.com/api.asmx/COMMERCIAL_SearchByProductName?APIKEY=' + key + '&ItemName=' + ingredient;
    if (ingredient) {
      return Ember.$.get(url).then(function(responseJSON) {
        var prices = responseJSON.getElementsByTagName("Pricing");
        var priceArray = [];
        for (var i = 0; i < prices.length; i ++) {
          var price = prices[i].childNodes[0].nodeValue;
          if (price !== 'NOPRICE') {
            priceArray.push(parseFloat(price).toFixed(2));
          }
        }
        priceArray.sort(function(a, b) {
          return a-b;
        });
        if (priceArray) {
          that.set('ingredientResult', priceArray[0]);
        }
      });
    }
  })
});
