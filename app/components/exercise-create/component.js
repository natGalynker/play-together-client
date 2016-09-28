import Ember from 'ember';
export default Ember.Component.extend({
  tagName: 'form',
  classNames: ['form-group'],

  exercise: {},
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
      this.sendAction('submitExercise', this.get('newExercise'));
    },
  }
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
