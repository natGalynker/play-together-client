import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
});

Router.map(function () {
  this.route('sign-up');
  this.route('sign-in');
  this.route('change-password');
  this.route('users');
  this.route('create-exercise');
  this.route('my-exercises');
  this.route('exercise');
  this.route('profiles', function() {
    this.route('edit');
  });
  this.route('profile');
});

export default Router;
