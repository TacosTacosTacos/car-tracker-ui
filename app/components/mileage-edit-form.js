import Ember from 'ember';

export default Ember.Component.extend({
  didRender () {
    this.$('#car').val(this.get('model.mileage.car_id'));
  },
  actions: {
    submit () {
      this.sendAction('submit', this.get('model.mileage'));
    },
  },
});
