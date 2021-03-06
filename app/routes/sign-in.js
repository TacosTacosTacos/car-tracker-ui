import Ember from 'ember';
import RSVP from 'rsvp';

export default Ember.Route.extend({
  auth: Ember.inject.service(),
  flashMessages: Ember.inject.service(),

  model () {
    return RSVP.Promise.resolve({});
  },

  actions: {
    signIn (credentials) {
      return this.get('auth').signIn(credentials)
      .then(() => this.transitionTo('user-dashboard'))
      .then(() => this.get('flashMessages').success('Thanks for signing in!'))
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
