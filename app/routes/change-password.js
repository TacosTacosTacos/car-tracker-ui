import Ember from 'ember';

export default Ember.Route.extend({
  auth: Ember.inject.service(),
  flashMessages: Ember.inject.service(),
  beforeModel () {
    if (!this.get('auth.credentials.token')) {
      this.transitionTo('/sign-in');
      this.get('flashMessages')
      .danger('You must be authenticated to access this page.');
    }
  },
  model () {
    return {};
  },
  actions: {
    changePassword (passwords) {
      this.get('auth').changePassword(passwords)
      .then(() => this.get('auth').signOut())
      .then(() => this.transitionTo('sign-in'))
      .then(() => {
        this.get('flashMessages')
        .success('Successfully changed your password!');
      })
      .then(() => {
        this.get('flashMessages').warning('You have been signed out.');
      })
      .catch(() => {
        this.get('flashMessages')
        .danger('There was a problem. Please try again.');
      });
    },
  },
});
