import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    deleteMileageRecord (mileageInfo) {
      this.sendAction('deleteMileageRecord', mileageInfo)
    },
  },
});
