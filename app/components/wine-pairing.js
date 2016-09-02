// import config from '../config/environment';
// import Ember from 'ember';
//
// export default Ember.Component.extend({
//   dishResult: Ember.computed('dish', function() {
//     var key = config.myApiKey2;
//     var url = 'http://http://services.wine.com/api/beta2/service.svc/JSON/catalog?filter=type&apikey=' + key;
//     if (this.get('dish').toLowerCase() = 'hot') {
//       return Ember.$.getJSON(url).then(function(responseJSON) {
//         var wines = responseJSON.products.list;
//         var wineArray = [];
//         wines.forEach (wine) {
//           wineArray.push(wine.name);
//         }
//         wineArray.random();
//         this.set('dishResult');
//         // console.log(dishResult);
//       });
//     }
//   })
// });
