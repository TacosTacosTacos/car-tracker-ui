import Ember from 'ember';

export default Ember.Component.extend({

  passwords: {},

  actions: {
    submit () {
      this.sendAction('submit', this.get('passwords'));
    },

    reset () {
      this.set('passwords', {});
    },
  },
  willDestroyElement () {
    console.log('before', this.get('passwords'))
    this.set('passwords', {});
    console.log('after', this.get('passwords'))
  }
});
