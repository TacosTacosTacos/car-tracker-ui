import DS from 'ember-data';

export default DS.Model.extend({
  car_id: DS.attr('number'),
  purchase_date: DS.attr(),
  gallons_of_gas: DS.attr('number'),
  trip_miles: DS.attr('number'),
  price_of_gas: DS.attr('number'),
  car: DS.attr(),
});
