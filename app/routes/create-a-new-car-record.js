import Ember from 'ember';
import RSVP from 'rsvp';

export default Ember.Route.extend({
  model () {
    return RSVP.hash({
      makes: this.get('store').findAll('make'),
      carRecord: this.get('store').createRecord('car', {})
    });
  },
  actions: {
    willTransition () {
      if (!this.controller.model.carRecord.id) {
        this.controller.model.carRecord.deleteRecord();
      }
    },
    createCar (carInfo) {
      carInfo.save()
      .then(() => this.transitionTo('garage'))
      .then(() => {
        this.get('flashMessages')
        .success('Your car has been added to the garage');
      })
      .catch(() => {
        this.get('flashMessages')
        .danger('An unexpected problem occured. Please try again.');
      });
    },
  },
  afterModel () {
    if (this.get('auth.credentials.token')) {
      this.transitionTo('user-dashboard');
    }
  },
  beforeModel () {
    if (this.get('auth.credentials.token')) {
      this.transitionTo('user-dashboard');
    }
  }
});
