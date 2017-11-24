import Ember from 'ember';
import { storageFor } from 'ember-local-storage';

export default Ember.Component.extend({
  signupstorage: storageFor('sign-up'),
  makeform: {},
  actions: {
    submit () {
      if(!this.get('makeform.nhtsa_make_id')) {
        // error handling for the make dropdown
        console.log(this);
        this.get('flashMessages')
        .warning('You must enter a Car Make');
        this.$('#carMake').focus();
      } else {
        // Store the entered data
        this.get('signupstorage').set('nhtsa_make_id', this.get('makeform.nhtsa_make_id'));
        this.get('signupstorage').set('year', this.get('makeform.year'));
        // Navigate to the next form
        this.sendAction('submit');
      }

      console.log(this.get('makeform'));
      // this.sendAction('submit', this.get('makeform'));
    },
  },
  willDestroyElement () {
    this.set('makeform', {});
  },

});
