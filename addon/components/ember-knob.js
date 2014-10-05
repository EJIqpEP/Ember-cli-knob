import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'button',

  initKnob: function() {
    console.log('setupKnob');
    this.$().knob();
  }.on('didInsertElement'),

  teardownKnob: function() {
    console.log('teardownKnob');
  }.on('willDestroyElement'),
});
