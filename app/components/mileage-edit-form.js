import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    submit () {
      console.log(this.get('model.mileage'))
      this.sendAction('submit', this.get('model.mileage'));
    },
  },
});
