import Ember from 'ember';

export default Ember.Component.extend({
  selectedOption: null,
  actions: {
   setSelection: function(selected) {
     this.set('selectedOption', selected);
    }
  }
});
