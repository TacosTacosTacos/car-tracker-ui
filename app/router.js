import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
});

Router.map(function () {
  this.route('sign-up');
  this.route('sign-in');
  this.route('change-password');
  this.route('user-dashboard');
  this.route('users');
  this.route('sign-up-p1');
  this.route('sign-up-p2');
  this.route('sign-up-p3');
  this.route('mileage');
});

export default Router;
