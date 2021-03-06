import Ember from 'ember';
import RSVP from 'rsvp';

export default Ember.Route.extend({
  service: Ember.inject.service(),
  model () {
    return RSVP.hash({
      cars: this.get('store').findAll('car'),
      service_types: this.get('store').findAll('service-type'),
      maintenanceRecord: this.get('store').createRecord('service', {})
    });
  },

  actions: {
    willTransition () {
      if (!this.controller.model.maintenanceRecord.id) {
        this.controller.model.maintenanceRecord.deleteRecord();
      }
    },
    createService (serviceInfo) {
      serviceInfo.save()
      .then(() => this.transitionTo('maintenance'))
      .then(() => {
        this.get('flashMessages')
        .success('Your record has been created');
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
