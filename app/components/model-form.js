import Ember from 'ember';
import { storageFor } from 'ember-local-storage';

export default Ember.Component.extend({
  signupstorage: storageFor('sign-up'),
  modelform: {},
  actions: {
    submit () {
      // Store the entered data
      this.get('signupstorage').set('carModel', this.get('modelform.carModel'));
      this.get('signupstorage').set('carLabel', this.get('modelform.carLabel'));
      // this.get('signupstorage').set('mileage', this.get('modelform.mileage'));
      // Navigate to the next form
      this.sendAction('submit');
    },
  },
  willDestroyElement () {
    this.set('modelform', {});
  },

});
