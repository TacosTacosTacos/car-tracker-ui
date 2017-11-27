import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    deleteMileageRecord (mileageInfo) {
      console.log('gettinghere')
      this.sendAction('deleteMileageRecord', mileageInfo)
      // mileageInfo.destroyRecord();
    },
  },
});
