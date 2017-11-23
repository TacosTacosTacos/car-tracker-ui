import Ember from 'ember';

export default Ember.Component.extend({

  makeform: {},
  actions: {
    submit () {
      console.log(this.get('makeform'))
      // this.sendAction('submit', this.get('makeform'));
    },
  },
  willDestroyElement () {
    this.set('makeform', {});
  },

});
