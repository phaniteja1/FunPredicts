import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('prediction-stock-row', 'Integration | Component | prediction stock row', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{prediction-stock-row}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#prediction-stock-row}}
      template block text
    {{/prediction-stock-row}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
