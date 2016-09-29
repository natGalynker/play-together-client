import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  duration: DS.attr('string'),
  //user: DS.belongsTo('user'),
  user_id: DS.attr(),
  description: DS.attr('string'),
  // targetGoal: DS.attr('date'),
  public: DS.attr('boolean', {defaultValue: false}),
  profile_id: DS.attr(),
  // goalStart: DS.attr(''),
  category: DS.attr('string')
  // category: DS.attr('boolean', { defaultValue: false }),
});
