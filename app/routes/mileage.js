import Ember from 'ember';

export default Ember.Route.extend({
  auth: Ember.inject.service(),
  flashMessages: Ember.inject.service(),
  model () {
    return this.get('store').findAll('mileage').then(mileage => mileage.sortBy('purchase_date'));
  },
  actions: {
    deleteMileageRecord (mileageInfo) {
      mileageInfo.destroyRecord()
      .then(() => this.refresh())
      .then(() => this.transitionTo('mileage'))
      .then(() => {
        this.get('flashMessages')
        .success('Your record has been deleted');
      })
      .catch(() => {
        this.get('flashMessages')
        .danger('An unexpected problem occured. Please try again.');
      });
    },
    editMileageRecord (mileageInfo) {
      console.log(mileageInfo)
      this.transitionTo('editmileage', mileageInfo);
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
