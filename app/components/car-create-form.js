import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    submit () {
      if(!this.get('model.carRecord.make_id')) {
        // error handling for the make dropdown
        this.get('flashMessages')
        .warning('You Must Select A Make');
        this.$('#carMake').focus();
      } else {
      this.sendAction('submit', this.get('model.carRecord'));
    }
    },
  },
});
