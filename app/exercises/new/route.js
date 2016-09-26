import Ember from 'ember';

export default Ember.Route.extend({
  auth: Ember.inject.service(),
  credentials: ('auth'),

  model () {
    let id = this.get('credentials.id');
    return this.get('store').findRecord('profile', id);
  },

  actions: {
    submit (data) {
      let exercise = this.get('store').createRecord('exercise', data);
      exercise.save()
      .then((result) => {
        console.log(result.id);
      });
      this.transitionTo('exercises');
    },

    cancel () {
        this.transitionTo('exercises');
      }
    }
  });
