import config from '../config/environment';
import Ember from 'ember';

export default Ember.Component.extend({
  ingredientResult: Ember.computed('ingredient', function() {
    var key = config.myApiKey;
    var that = this;
    var url = 'http://www.supermarketapi.com/api.asmx/COMMERCIAL_SearchByProductName?APIKEY=' + key + '&ItemName=' + this.get('ingredient').toLowerCase();
    return Ember.$.get(url).then(function(responseJSON) {
      var prices = responseJSON.getElementsByTagName("Pricing");
      console.log(prices);
      var priceArray = [];
      for (var i = 0; i < prices.length; i ++) {
        var price = prices[i].childNodes[0].nodeValue;
        priceArray.push(price);
      }
      priceArray.sort(function(a, b) {
        return a-b;
      });
      that.set('ingredientResult', parseFloat(priceArray[0]).toFixed(2));
    });
  })
});
