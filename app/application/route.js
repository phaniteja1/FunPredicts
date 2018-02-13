import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default Route.extend({
  currentUser: service(),

  model() {
    return this.store.findRecord('user', 3);
  },

  afterModel(model) {
    this.get('currentUser').saveCurrentUser(model);
  },

  setupController(controller) {
    controller.set('currentUser', this.get('currentUser.user'));
  }
});
