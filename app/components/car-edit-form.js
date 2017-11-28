import Ember from 'ember';

export default Ember.Component.extend({
  didRender () {
    this.$('#carMake').val(this.get('model.carRecord.make_id'));
  },
  actions: {
    submit () {
      this.sendAction('submit', this.get('model.carRecord'));
    },
  },
});
