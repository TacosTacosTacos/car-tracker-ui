import Ember from 'ember';

export default Ember.Route.extend({
  auth: Ember.inject.service(),
  flashMessages: Ember.inject.service(),
  model () {
    return this.get('store').findAll('service').then(service => service.sortBy('service_date'));
  },
  actions: {
    deleteServiceRecord (serviceInfo) {
      serviceInfo.destroyRecord()
      .then(() => this.transitionTo('maintenance'))
      .then(() => {
        this.get('flashMessages')
        .success('Your record has been deleted');
      })
      .catch(() => {
        this.get('flashMessages')
        .danger('An unexpected problem occured. Please try again.');
      });
    },
    editServiceRecord (serviceInfo) {
      this.transitionTo('editmaintenance', serviceInfo);
    },
  },
  beforeModel () {
    if (!this.get('auth.credentials.token')) {
      this.transitionTo('/sign-in');
      this.get('flashMessages')
      .danger('You must be authenticated to access this page.');
    }
  }
});
