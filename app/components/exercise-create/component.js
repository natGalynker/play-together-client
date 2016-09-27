import Ember from 'ember';
export default Ember.Component.extend({
  tagName: 'div',
  classNames: ['form-group'],
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
      let exercise = this.get('exercise');
      this.sendAction('submitExercise', exercise);
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
