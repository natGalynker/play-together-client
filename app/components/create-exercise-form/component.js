import Ember from 'ember';

export default Ember.Component.extend({
listItemCompleted: Ember.computed.alias('workout.done'),
actions: {
  toggleDone () {
    this.sendAction('toggleDone', this.get('workout'));
  },

  delete () {
    this.sendAction('delete', this.get('workout'));
  },
},
});
