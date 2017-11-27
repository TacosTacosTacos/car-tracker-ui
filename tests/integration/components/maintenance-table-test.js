import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('maintenance-table', 'Integration | Component | maintenance table', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{maintenance-table}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#maintenance-table}}
      template block text
    {{/maintenance-table}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
