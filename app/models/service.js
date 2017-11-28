import DS from 'ember-data';

export default DS.Model.extend({
  car_id: DS.attr('number'),
  service_type_id: DS.attr('number'),
  service_date: DS.attr(),
  current_mileage: DS.attr('number'),
  notes: DS.attr('string'),
  car: DS.attr(),
  service_type: DS.attr(),
});
