import Ember from 'ember';
import RSVP from 'rsvp';

export default Ember.Route.extend({
  auth: Ember.inject.service(),
  flashMessages: Ember.inject.service(),
  model (params) {
  return RSVP.hash({
    makes: this.get('store').findAll('make'),
    carRecord: this.get('store').findRecord('car', params.car_id)
  });
},
actions: {
  submit (carInfo) {
    carInfo.save()
    .then(() => this.transitionTo('garage'));
  },
},
  beforeModel () {
    if (!this.get('auth.credentials.token')) {
      this.transitionTo('/sign-in');
      this.get('flashMessages')
      .danger('You must be authenticated to access this page.');
    }
  }
});
