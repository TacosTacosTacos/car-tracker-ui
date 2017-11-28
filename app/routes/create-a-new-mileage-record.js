import Ember from 'ember';

export default Ember.Route.extend({
  mileage: Ember.inject.service(),
  model () {
    return this.get('store').findAll('car');
  },
  actions: {
    createMileages (mileageInfo) {
      let mileageRecord = this.get('store').createRecord('mileage', {
        car_id: mileageInfo.car_id,
        purchase_date: mileageInfo.purchase_date,
        gallons_of_gas: mileageInfo.gallons_of_gas,
        trip_miles: mileageInfo.trip_miles,
        price_of_gas: mileageInfo.price_of_gas,
      });
      mileageRecord.save()
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
