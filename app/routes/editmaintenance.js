import Ember from 'ember';
import RSVP from 'rsvp';

export default Ember.Route.extend({
  auth: Ember.inject.service(),
  flashMessages: Ember.inject.service(),
  model(params) {
  return RSVP.hash({
    cars: this.get('store').findAll('car'),
    service_types: this.get('store').findAll('service_type'),
    maintenance: this.get('store').findRecord('service', params.service_id)
  });
},
actions: {
  submit (mileageInfo) {
    mileageInfo.save();
    this.transitionTo('maintenance');
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
