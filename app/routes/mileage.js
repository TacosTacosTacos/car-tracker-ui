import Ember from 'ember';

export default Ember.Route.extend({
  auth: Ember.inject.service(),
  flashMessages: Ember.inject.service(),
  model () {
    return this.get('store').findAll('mileage');
  },
  actions: {
    deleteMileageRecord (mileageInfo) {
      console.log('mileageinfo', mileageInfo);
      mileageInfo.destroyRecord();
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
