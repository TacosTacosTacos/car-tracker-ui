import Ember from 'ember';
import { storageFor } from 'ember-local-storage';

export default Ember.Component.extend({
  signupstorage: storageFor('sign-up'),
  actions: {
    submit () {

      if(!this.get('model.carModel')) {
        // error handling for the make dropdown
        this.get('flashMessages')
        .warning('You Must Select A Car Model');
        this.$('#carModel').focus();
      } else {
        // Store the entered data
        this.get('signupstorage').set('carModel', this.get('model.carModel'));
        this.get('signupstorage').set('carLabel', this.get('model.carLabel'));

        // Navigate to the next form
        this.sendAction('submit');
      }
    },
  },
});
