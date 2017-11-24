import Ember from 'ember';

export default Ember.Route.extend({
  auth: Ember.inject.service(),
  model () {
    return this.get('store').findAll('make');
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
