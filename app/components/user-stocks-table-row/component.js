import Component from '@ember/component';
import { computed } from '@ember/object';

export default Component.extend({
  tagName: 'tr',

  totalAmount: computed('userStock.stock.price', {
    get() {
      return this.get('userStock.numberOfStocks') * this.get('userStock.stock.price');
    }
  }),
});
