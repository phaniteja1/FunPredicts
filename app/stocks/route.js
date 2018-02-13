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
      let transactionCostToAdd = userStock.get('number_of_stocks') * userStock.get('stock.price');

      this.store.findRecord('user-stock', userStock.get('id'), { backgroundReload: false }).then((stock) => {
        stock.deleteRecord();
        stock.get('isDeleted'); // => true
        stock.save().then(() => {
          let currentUser = this.get('currentUser.user');

          let currentUserMoney = currentUser.get('money');

          currentUser.set('money', currentUserMoney + transactionCostToAdd);
          currentUser.save().then(() => {
            this.send('hideSellStockModal');
          });
        }).catch(() => {
          
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
