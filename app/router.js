import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('index');
  this.route('predictions');
  this.route('stocks');
  this.route('profile');
  this.route('home');
});

export default Router;
