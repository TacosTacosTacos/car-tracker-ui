import Ember from 'ember';
import { storageFor } from 'ember-local-storage';

export default Ember.Service.extend({
  ajax: Ember.inject.service(),
  credentials: storageFor('auth'),
  signupstorage: storageFor('sign-up'),

  getModelInformation () {
    return this.get('ajax').request('/nhtsa', {
      data: {
        user_input: {
          year: this.get('signupstorage.year'),
          make_id: this.get('signupstorage.nhtsa_make_id'),
        },
      },
    });
  },
});
