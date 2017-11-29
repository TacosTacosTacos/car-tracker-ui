import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    doCoolStuff () {
      this.get('flashMessages')
      .danger('Did you hear that? It must be Godzilla!!!! Sign up for CarTracker while you still can.');
      this.$('div').addClass('vibrate-3')
      this.$('#sound_element').html("<audio autoplay><source src=https://raw.githubusercontent.com/TacosTacosTacos/car-tracker-ui/nhtsa/app/konami/Godzilla_Roar-Marc-1912765428.mp3 type=audio/mpeg></audio>");
    }
  }
});
