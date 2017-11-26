import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('mileages-table-header', 'Integration | Component | mileages table header', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{mileages-table-header}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#mileages-table-header}}
      template block text
    {{/mileages-table-header}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
