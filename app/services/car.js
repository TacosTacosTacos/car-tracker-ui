import Ember from 'ember';
import { storageFor } from 'ember-local-storage';

export default Ember.Service.extend({
  ajax: Ember.inject.service(),
  credentials: storageFor('auth'),
  signupstorage: storageFor('sign-up'),

  createCar () {
    return this.get('ajax').post('/cars', {
      data: {
        car: {
          make_id: this.get('signupstorage.make_id'),
          model: this.get('signupstorage.carModel'),
          year: this.get('signupstorage.year'),
          label: this.get('signupstorage.carLabel'),
        },
      },
    });
  },
});
