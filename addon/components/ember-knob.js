import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'input',

  initKnob: function() {
    var _this = this;
    var _this.opts = {
      fgColor: _this.get('fgColor'),
      bgColor: _this.get('bgColor'),
      inputColor: _this.get('inputColor'),
      font: _this.get('font'),
      fontWeight: _this.get('fontWeight'),
      min: Number(_this.get('min')),
      max: Number(_this.get('max')),
      step: Number(_this.get('step')),
      width: _this.get('width'),
      value: _this.get('value'),
      cursor: _this.get('cursor'),
      displayInput: _this.get('displayInput') === "true",
      displayPrevious: _this.get('displayPrevious') === "true",
      thickness: _this.get('thickness'),
      angleOffset: _this.get('angleOffset'),
      lineCap: _this.get('lineCap'),
      angleArc: _this.get('angleArc'),
      stopper: _this.get('stopper '),
      readOnly: _this.get('readOnly'),
      rotation: _this.get('rotation'),
      change: function(v) {
        _this.set('value', v);
      }   
         
    };

    _this.$().knob(opts);

    _this.setInitedValue();



  }.on('didInsertElement'),

  cleanOpts: function() {
    var _this = this;
    var keys = Object.keys(_this.opts);

    keys.forEach(function(item) {
      if (!_this.get(item)) {
        delete _this.opts[item];
      }
    });    
  },

  setInitedValue: function () {
    if (this.get('value')) {
      this.$().val(this.get('value')).trigger('change');
    }
  },

  valueChanged: function() {
    this.$().val(this.get('value')).trigger('change');
    console.log(this.get('value'));
  }.observes('value'),

  teardownKnob: function() {
    console.log('teardownKnob');
  }.on('willDestroyElement'),
});
