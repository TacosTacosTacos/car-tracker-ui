import Ember from 'ember';

export default Ember.Component.extend({
  service: {},

  actions: {
    submit () {

      console.log(this.get('service'))

      if(!this.get('service.car_id')) {
        // error handling for the make dropdown
        this.get('flashMessages')
        .warning('You Must Select A Car');
        this.$('#car').focus();
      } else if (!this.get('service.service_type_id')) {
        this.get('flashMessages')
        .warning('You Must Select A Service Type');
        this.$('#service-type').focus();
      } else {
        this.sendAction('submit', this.get('service'));
      }
    },
  },
  didRender () {
  },
  willDestroyElement () {
    this.set('service', {});
  },
});
