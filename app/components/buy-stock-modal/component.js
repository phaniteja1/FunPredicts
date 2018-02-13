import Component from '@ember/component';
import { computed } from '@ember/object';

export default Component.extend({

  numberOfStocks: 1,

  totalAmount: computed('numberOfStocks', {
    get() {
      return this.get('numberOfStocks') * this.get('stock.price');
    }
  })
});
