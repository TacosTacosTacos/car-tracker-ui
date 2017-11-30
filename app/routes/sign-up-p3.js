import Ember from 'ember';
import { storageFor } from 'ember-local-storage';

export default Ember.Route.extend({
  auth: Ember.inject.service(),
  car: Ember.inject.service(),
  flashMessages: Ember.inject.service(),
  credentials: storageFor('auth'),
  signupstorage: storageFor('sign-up'),
  model () {
    return {}
  },
  actions: {
    signUp (credentials) {
      this.get('auth').signUp(credentials)
      .then(() => this.get('auth').signIn(credentials))
      .then(() => this.get('car').createCar())
      .then(() => this.get('signupstorage').reset())
      .then(() => this.get('auth.credentials').set('hideConfetti', false))
      .then(() => this.transitionTo('user-dashboard'))
      .then(() => {
        this.get('flashMessages')
        .success('Congratulations on becoming a new user!');
      })
      .catch(() => {
        this.get('flashMessages')
        .danger('An unexpected problem occured. Please try again.');
      });
    },
  },
  beforeModel () {
    if (this.get('auth.credentials.token')) {
      this.transitionTo('user-dashboard');
    }
  }
});
