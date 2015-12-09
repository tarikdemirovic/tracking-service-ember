import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('pois', function() {
    this.route('poi', { path: '/:id'});
  });
  this.route('login');
});

export default Router;
