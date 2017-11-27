import Ember from 'ember';
import { storageFor } from 'ember-local-storage';

export default Ember.Service.extend({
  ajax: Ember.inject.service(),
  credentials: storageFor('auth'),
  signupstorage: storageFor('sign-up'),

  createMileages (mileageInfo) {
    return this.get('ajax').post('/mileages', {
      data: {
        mileage: {
          car_id: mileageInfo.car_id,
          purchase_date: mileageInfo.purchase_date,
          gallons_of_gas: mileageInfo.gallons_of_gas,
          trip_miles: mileageInfo.trip_miles,
          price_of_gas: mileageInfo.price_of_gas,
        },
      },
    });
  },
});
