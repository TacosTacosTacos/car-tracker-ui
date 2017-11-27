import Ember from 'ember';

export default Ember.Component.extend({
  mileage: {},

  actions: {
    submit () {
      if(!this.get('mileage.car_id')) {
        // error handling for the make dropdown
        this.get('flashMessages')
        .warning('You Must Select A Car');
        this.$('#car').focus();
      } else {
      this.sendAction('submit', this.get('mileage'));
    }
    },
  },
  didRender () {
  },
  willDestroyElement () {
    this.set('mileage', {});
  },
});
