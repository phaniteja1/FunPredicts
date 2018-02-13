import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default Route.extend({
  currentUser: service(),

  model() {
    let data = this.store.findAll('user-stock');
    return data;
  },

  actions: {
    sellStock(userStock) {
      this.store.findRecord('user-stock', userStock.get('id'), { backgroundReload: false }).then((stock) => {
        stock.deleteRecord();
        stock.save().then(() => {
          this.store.findRecord('user', this.get('currentUser.user.id'));
          this.send('hideSellStockModal');
        });
      });
    },

    showSellStockModal(userStock) {
      this.controller.set('userStockToSell', userStock);
      this.controller.set('showSellStockModal', true);
    },

    hideSellStockModal() {
      this.controller.set('showSellStockModal', false);
    }
  }
});
