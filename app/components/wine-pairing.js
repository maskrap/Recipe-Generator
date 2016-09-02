import config from '../config/environment';
import Ember from 'ember';

export default Ember.Component.extend({
  dishResult: Ember.computed('recipe', function() {
    console.log(this.get('recipe'));
    var that = this;
    var key = config.myApiKey2;
    var url = 'http://services.wine.com/api/beta2/service.svc/JSON/catalog?filter=type&apikey=' + 'cc9b6e601c6fe9cde1aeab629aa12119';
    if (this.get('recipe').get('dish').toLowerCase() === 'hot') {
      return Ember.$.getJSON(url).then(function(responseJSON) {
        var wines = responseJSON.Products.List;
        var wineArray = [];
        wines.forEach(function(wine) {
          wineArray.push(wine.Name);
        });
        console.log(wineArray[Math.floor(Math.random()*wineArray.length)]);
        var rndWine = wineArray[Math.floor(Math.random()*wineArray.length)];
        that.set('dishResult', rndWine);
      });
    }
  })
});
