import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    submit () {
      if(!this.get('model.maintenanceRecord.car_id')) {
        // error handling for the make dropdown
        this.get('flashMessages')
        .warning('You Must Select A Car');
        this.$('#car').focus();
      } else if (!this.get('model.maintenanceRecord.service_type_id')) {
        this.get('flashMessages')
        .warning('You Must Select A Service Type');
        this.$('#service-type').focus();
      } else {
        this.sendAction('submit', this.get('model.maintenanceRecord'));
      }
    },
  },
});
