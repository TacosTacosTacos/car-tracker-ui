import Ember from 'ember';
import { storageFor } from 'ember-local-storage';

export default Ember.Component.extend({
  signupstorage: storageFor('sign-up'),
  makeform: {},
  actions: {
    submit () {
      if(!this.get('makeform.nhtsa_make_id')) {
        // error handling for the make dropdown
        this.get('flashMessages')
        .warning('You must enter a Car Make');
        this.$('#carMake').focus();
      } else {
        // Store the entered data
        var myModel =  this.get('model');
        console.log(myModel.content[0]._data.nhtsa_make_id)

        var filteredMake = myModel.content.filter((internalModel) => {
         return internalModel._data.nhtsa_make_id == this.get('makeform.nhtsa_make_id')
       })[0].id;

        this.get('signupstorage').set('make_id', filteredMake);
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
