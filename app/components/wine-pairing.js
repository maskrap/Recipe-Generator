import config from '../config/environment';
import Ember from 'ember';

export default Ember.Component.extend({
  dishResult: Ember.computed('recipe', function() {
    var key = config.myApiKey2;
    var that = this;
    var urlRed = 'http://services.wine.com/api/beta2/service.svc/JSON/catalog?filter=catagories(490+124)&apikey=' + key;
    var urlWhite = 'http://services.wine.com/api/beta2/service.svc/JSON/catalog?filter=catagories(490+125)&apikey=' + key;
    if (this.get('recipe').get('dish').toLowerCase() === 'hot') {
      return Ember.$.getJSON(urlRed).then(function(responseJSON) {
        var wines = responseJSON.Products.List;
        var wineArray = [];
        wines.forEach(function(wine) {
          wineArray.push(wine.Name);
        });
        var rndWine = wineArray[Math.floor(Math.random()*wineArray.length)];
        that.set('dishResult', rndWine);
      });
    }
    else {
      return Ember.$.getJSON(urlWhite).then(function(responseJSON) {
        var wines = responseJSON.Products.List;
        var wineArray = [];
        wines.forEach(function(wine) {
          wineArray.push(wine.Name);
        });
        var rndWine = wineArray[Math.floor(Math.random()*wineArray.length)];
        that.set('dishResult', rndWine);
      });
    }
  })
});
