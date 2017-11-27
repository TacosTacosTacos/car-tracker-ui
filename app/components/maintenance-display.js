import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    deleteServiceRecord (serviceInfo) {
      this.sendAction('deleteServiceRecord', serviceInfo);
    },
    editServiceRecord (serviceInfo) {
      this.sendAction('editServiceRecord', serviceInfo);
    },
  },
});
