import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'input',

  initKnob: function() {
    var _this = this;
    _this.opts = {
      fgColor: _this.get('fgColor'),
      bgColor: _this.get('bgColor'),
      inputColor: _this.get('inputColor'),
      font: _this.get('font'),
      fontWeight: _this.get('fontWeight'),
      min: Number(_this.get('min')),
      max: Number(_this.get('max')),
      step: Number(_this.get('step')),
      width: _this.get('width'),
      height: _this.get('height'),
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

    _this.cleanOpts();

    _this.$().knob(_this.opts);

    _this.setInitedValue();



  }.on('didInsertElement'),

  cleanOpts: function() {
    var _this = this;
    var keys = Object.keys(_this.opts);

    keys.forEach(function(item) {
      if (_this.get(item) === undefined) {
        delete _this.opts[item];
      }
    });
  },

  setInitedValue: function() {
    if (this.get('value')) {
      this.$().val(this.get('value')).trigger('change');
    }
  },

  valueChanged: function() {
    this.$().val(this.get('value')).trigger('change');
    this.sendAction('change');
  }.observes('value'),

  teardownKnob: function() {}.on('willDestroyElement')

});
