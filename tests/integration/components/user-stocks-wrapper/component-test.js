import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('user-stocks-wrapper', 'Integration | Component | user stocks wrapper', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{user-stocks-wrapper}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#user-stocks-wrapper}}
      template block text
    {{/user-stocks-wrapper}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
