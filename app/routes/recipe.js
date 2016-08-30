import config from '../config/environment';
import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
     var key = config.myApiKey;
     var url = 'http://www.supermarketapi.com/api.asmx/COMMERCIAL_SearchByProductName?APIKEY=' +key+ '&ItemName=' + params;
     return Ember.$.getJSON(url).then(function(responseJSON) {
       return responseJSON.results;
     });
   }
 });
