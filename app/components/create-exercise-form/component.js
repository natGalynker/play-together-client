import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'form',
classNames: ['form-horizontal'],

workouts: {},

actions: {
  submit () {
    this.sendAction('submit', this.get('workouts'));
  },

  reset () {
    this.set('workouts', {});
  },
},
});
});
