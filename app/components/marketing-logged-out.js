import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    doCoolStuff () {
      this.get('flashMessages')
      .success('Cheats Enabled');
      this.$('div').addClass('vibrate-3')
      this.$('#sound_element').html("<audio autoplay><source src=http://soundbible.com/mp3/Godzilla_Roar-Marc-1912765428.mp3 type=audio/mpeg></audio>");
    }
  }
});
