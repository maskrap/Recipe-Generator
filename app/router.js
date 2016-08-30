import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('admin');
  this.route('recipe', {path: '/recipe/:recipe_id'});
  this.route('result', {path: '/result/:cuisine'});
  this.route('list');
});

export default Router;
