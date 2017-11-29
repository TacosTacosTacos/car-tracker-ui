import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    doCoolStuff () {
      this.get('flashMessages')
      .success('Cheats Enabled');
    }
  }
});
