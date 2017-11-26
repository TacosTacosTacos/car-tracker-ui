import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('gas-gallons-input', 'Integration | Component | gas gallons input', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{gas-gallons-input}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#gas-gallons-input}}
      template block text
    {{/gas-gallons-input}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
