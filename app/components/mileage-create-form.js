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
      console.log(this.get('mileage'))
      this.sendAction('submit', this.get('mileage'));
    }
    },
  },
  willDestroyElement () {
    this.set('mileage', {});
  },
});
