import Ember from 'ember';
export default Ember.Component.extend({
  tagName: 'form',
  classNames: ['form-group'],

  exercise: {
    category: 'routine',
    name: 'lyra performance',
    duration: '30 minutes',
    description: 'Song: seven nations army, 20 sequences',

  },
  category: ['Routine', 'Cardio', 'Class', 'Strength, Cool-down', 'Warm-up'],




  actions: {
    chooseCategory() {
      let exercise = this.get('exercise');
      this.set('category', exercise);
    },

    cancel () {
      let exercise = this.get('exercise');
      this.sendAction('reset', exercise);
    },

    submitExercise () {
      console.log('exercise submitted');
      this.sendAction('submitExercise', this.get('exercise'));
    },
  },
});



//
// createItem (data) {
//     let item = this.get('store').createRecord('item', data);
//     item.save();
//   },
//
//   saveList(list) {
//     list.save()
//       .then(()=>this.transitionTo('lists'));
//   },
