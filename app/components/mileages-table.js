import Ember from 'ember';
export function fmtCurrency(num) {
  num = +num;

  if (isNaN(num)) { return ''; } // You could set this to 0 if you wanted

  num = num.toFixed(2);

  return num.replace(/\B(?=(\d{3})+(?!\d)(?=\.))/g, ',');
}

export default Ember.Component.extend({
});
