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
  this.route('create-a-new-mileage-record');
  this.route('editmileage', {path: '/mileage/:mileage_id'});
  this.route('maintenance');
  this.route('editmaintenance', {path: '/maintenance/:service_id'});
  this.route('create-a-new-maintenance-record');
  this.route('garage');
  this.route('create-a-new-car-record');
});

export default Router;
