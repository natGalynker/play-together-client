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
  this.route('profile', { path: 'profiles/:profile_id' });
  this.route('profiles');
  this.route('profiles/edit');
  this.route('profiles/:profile_id/edit');
  this.route('exercise', { path: 'exercises/:id' });
  this.route('exercises');
  this.route('exercises/new');
});

export default Router;
