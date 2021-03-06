import Ember from 'ember';
import RSVP from 'rsvp';

export default Ember.Route.extend({
  auth: Ember.inject.service(),
  flashMessages: Ember.inject.service(),
  model(params) {
  return RSVP.hash({
    cars: this.get('store').findAll('car'),
    mileage: this.get('store').findRecord('mileage', params.mileage_id)
  });
},
actions: {
  submit (mileageInfo) {
    mileageInfo.save()
    .then(() => {
      this.get('flashMessages')
      .success('Your changes has been made.');
    })
    .then(() => this.transitionTo('mileage'));
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
