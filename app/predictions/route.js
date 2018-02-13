import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default Route.extend({
  currentUser: service(),

  model() {
    let data = this.store.findAll('prediction');
    return data;
  },

  actions: {
    buyStock(stock, numberOfStocks) {
      let userStockCollection = this.store.createRecord('user-stock', {
        number_of_stocks: numberOfStocks,
        user: this.get('currentUser.user'),
        stock: stock,
      });

      userStockCollection.save().then(() => {
        let transactionCost = numberOfStocks * stock.get('price');

        let currentUser = this.get('currentUser.user');

        let currentUserMoney = currentUser.get('money');

        currentUser.set('money', currentUserMoney - transactionCost);
        currentUser.save().then(() => {
          this.send('hideBuyStockModal');
        });
      }).catch(() => {
        userStockCollection.deleteRecord();
      });
    },

    showBuyStock(stock) {
      this.controller.set('stock', stock);
      this.controller.set('showBuyStockModal', true);
    },

    hideBuyStockModal() {
      this.controller.set('showBuyStockModal', false);
    }
  }
});
