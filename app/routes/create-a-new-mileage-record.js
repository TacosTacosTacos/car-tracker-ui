import Ember from 'ember';

export default Ember.Route.extend({
  mileage: Ember.inject.service(),
  model () {
    return this.get('store').findAll('car');
  },
  actions: {
    createMileages (mileageInfo) {
      this.get('mileage').createMileages(mileageInfo)
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
