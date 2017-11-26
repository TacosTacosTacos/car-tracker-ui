import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('mileages-table-row', 'Integration | Component | mileages table row', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{mileages-table-row}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#mileages-table-row}}
      template block text
    {{/mileages-table-row}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
