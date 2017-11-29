import Ember from 'ember';
import { storageFor } from 'ember-local-storage';

export default Ember.Component.extend({
  signupstorage: storageFor('sign-up'),
  modelform: {},
  actions: {
    submit () {

      if(!this.get('modelform.carModel')) {
        // error handling for the make dropdown
        this.get('flashMessages')
        .warning('You Must Select A Car Model');
        this.$('#carModel').focus();
      } else {
        // Store the entered data
        this.get('signupstorage').set('carModel', this.get('modelform.carModel'));
        this.get('signupstorage').set('carLabel', this.get('modelform.carLabel'));

        // Navigate to the next form
        this.sendAction('submit');
      }
    },
  },
  willDestroyElement () {
    this.set('modelform', {});
  },

});
