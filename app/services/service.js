import Ember from 'ember';
import { storageFor } from 'ember-local-storage';

export default Ember.Service.extend({
  ajax: Ember.inject.service(),
  credentials: storageFor('auth'),
  signupstorage: storageFor('sign-up'),

  createServices (serviceInfo) {
    return this.get('ajax').post('/services', {
      data: {
        service: {
          car_id: serviceInfo.car_id,
          service_type_id: serviceInfo.service_type_id,
          service_date: serviceInfo.service_date,
          current_mileage: serviceInfo.current_mileage,
          notes: serviceInfo.notes,
        },
      },
    });
  },
});
