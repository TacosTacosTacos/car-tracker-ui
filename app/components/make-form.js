import Ember from 'ember';
import { storageFor } from 'ember-local-storage';

export default Ember.Component.extend({
  signupstorage: storageFor('sign-up'),
  nhtsa: Ember.inject.service(),
  makeform: {},
  didRender () {
  },
  actions: {
    submit () {
      if(!this.get('model.makeform.nhtsa_make_id')) {
        // error handling for the make dropdown
        this.get('flashMessages')
        .warning('You must enter a Car Make');
        this.$('#carMake').focus();
      } else {
        // Store the entered data
        const myModel = this.get('model.make');

        const filteredMake = myModel.content.filter((internalModel) => {
         return internalModel._data.nhtsa_make_id == this.get('model.makeform.nhtsa_make_id');
       })[0].id;

        // Store Make Information
        this.get('signupstorage').set('make_id', filteredMake);
        this.get('signupstorage').set('nhtsa_make_id', this.get('model.makeform.nhtsa_make_id'));
        this.get('signupstorage').set('year', this.get('model.makeform.year'));

        // Check for Cars
        this.get('nhtsa').getModelInformation()
        .then((data) => {
          const cars = data.carmodels.map(car => car.Model_Name);
          if (cars.length === 0) {
            this.get('flashMessages')
            .warning('No Cars were found.  Please adjust your entered information.');
          } else {
            this.get('signupstorage').set('carModels', cars);
            // Navigate to the next form
            this.sendAction('submit');
          }
        })
        .catch(() => {
          this.get('flashMessages')
          .danger('An unexpected problem occured. Please try again.');
        });
      }
    },
  },
  willDestroyElement () {
    this.set('makeform', {});
  },

});
