import Service from '@ember/service';

export default Service.extend({
  // the property for the user data
  user: null,

  saveCurrentUser(user) {
    this.set('user', user);
  },

  getCurrentUser() {
    return this.get('user');
  }
});
