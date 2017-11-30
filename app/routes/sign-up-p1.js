import Ember from 'ember';
import RSVP from 'rsvp';

export default Ember.Route.extend({
  auth: Ember.inject.service(),
  model () {
    return RSVP.hash({
      make: this.get('store').findAll('make'),
      makeform: {}
    });
  },
  actions: {
    submit () {
      // Transition to the next signup screen
      this.transitionTo('sign-up-p2');
    },
  },
  beforeModel () {
    if (this.get('auth.credentials.token')) {
      this.transitionTo('user-dashboard');
    }
  }
});
