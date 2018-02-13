import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('user-stocks-table-row', 'Integration | Component | user stocks table row', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{user-stocks-table-row}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#user-stocks-table-row}}
      template block text
    {{/user-stocks-table-row}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
