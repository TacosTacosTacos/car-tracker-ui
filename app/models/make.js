import DS from 'ember-data';

export default DS.Model.extend({
  nhtsa_make_id: DS.attr('number'),
  make_name: DS.attr('string'),
});
