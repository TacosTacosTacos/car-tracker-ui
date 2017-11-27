import DS from 'ember-data';

export default DS.Model.extend({
  year: DS.attr(),
  label: DS.attr(),
  model: DS.attr(),
});
