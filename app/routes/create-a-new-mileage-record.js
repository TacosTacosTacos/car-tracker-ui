import Ember from 'ember';
import RSVP from 'rsvp';

export default Ember.Route.extend({
  mileage: Ember.inject.service(),
  model () {
    return RSVP.hash({
      cars: this.get('store').findAll('car'),
      mileageRecord: this.get('store').createRecord('mileage', {})
    });
  },
  actions: {
    willTransition () {
      if (!this.controller.model.mileageRecord.id) {
        this.controller.model.mileageRecord.deleteRecord();
      }
    },
    createMileages (mileageInfo) {
      mileageInfo.save()
      .then(() => this.transitionTo('mileage'))
      .then(() => {
        this.get('flashMessages')
        .success('Your record has been created');
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
