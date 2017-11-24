import Ember from 'ember';
import { storageFor } from 'ember-local-storage';

export default Ember.Service.extend({
  ajax: Ember.inject.service(),
  credentials: storageFor('auth'),
  signupstorage: storageFor('sign-up'),
  isAuthenticated: Ember.computed.bool('credentials.token'),

  retrieveModels () {
    return this.get('ajax').get('/nhtsa', {
      data: {
        user_input: {
          year: signupstorage.year,
          make_id: signupstorage.nhtsa_make_id,
        },
      },
    })
    .then((result) => {
      this.get('signupstorage').set('carmodels', result.carmodels);
    });
  },
});
