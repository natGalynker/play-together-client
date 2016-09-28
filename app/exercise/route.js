import Ember from 'ember';
export default Ember.Route.extend({
  auth: Ember.inject.service(),
  model (params) {
  return this.get('store').findRecord('exercise', params.list_id);
},
  actions: {
    createAction () {
      this.transitionTo('exercises/new');
    },
  }
});
