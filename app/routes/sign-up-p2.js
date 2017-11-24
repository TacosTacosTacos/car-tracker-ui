import Ember from 'ember';
import { storageFor } from 'ember-local-storage';

export default Ember.Route.extend({
  auth: Ember.inject.service(),
  signupstorage: storageFor('sign-up'),
  // model () {
  //   return this.get('store').findAll('model');
  // },
  actions: {
    submit () {
      // Transition to the next signup screen
      this.transitionTo('sign-up-p3')
    },
  },
  beforeModel () {
    if (this.get('auth.credentials.token')) {
      this.transitionTo('user-dashboard');
    } else if (!this.get('signupstorage.nhtsa_make_id')) {
      this.transitionTo('sign-up-p1');
    }
  }
});
