import Ember from 'ember';

export default Ember.Component.extend({
  didRender () {
    this.$('#car').val(this.get('model.maintenance.car_id'));
    this.$('#service-type').val(this.get('model.maintenance.service_type_id'));
  },
  actions: {
    submit () {
      this.sendAction('submit', this.get('model.maintenance'));
    },
  },
});
