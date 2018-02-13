import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('sell-stock-modal', 'Integration | Component | sell stock modal', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{sell-stock-modal}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#sell-stock-modal}}
      template block text
    {{/sell-stock-modal}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
