# Ember-cli-knob

A dial component for Ember using http://anthonyterrien.com/knob/

![knobs](https://cloud.githubusercontent.com/assets/1217730/4590172/64b11862-505c-11e4-8bbd-b3afff08729d.png)


## Install

* `npm install --save ember-cli-knob`
* `ember g ember-cli-knob`

## Usage

In the template you can use this helper
```handlebars
{{ember-knob}}
```

The component can also take options
```handlebars
{{ember-knob fgColor="red" bgColor="blue" width="150"}}
```

### Options ###

The `ember-knob` helper has options to customize it.

##### Behaviors

#### `min` ####

Minimum value of the dial. Default: 0.

#### `max` ####

Maximum value of the dial. Default: 100.

#### `step` ####

Step value. Default: 1.

#### `angleOffset` ####

Starting angle in degrees. Default: 0.

#### `angleArc` ####

Starting angle in degrees. Default: 360.

#### `stopper` ####

Stop at min & max on keydown/mousewheel. Default: true.

#### `readOnly` ####

Disable input and events. Default: false.

#### `rotation` ####

Direction of progression. Default: clockwise.

##### UI

#### `cursor` ####

Display mode "cursor", cursor size could be changed passing a numeric value to the option. Default: gauge.

#### `thickness` ####

Gauge thickness. Default: false.

#### `lineCap` ####

Gauge stroke endings. Default: butt. Rounded: round.

#### `width` ####

Dial width.

#### `height` ####

Dial height.

#### `displayInput` ####

Hide or display input. Default: true. Hide input: false.

#### `displayPrevious` ####

Displays the previous value with transparency. Default: false.

#### `fgColor` ####

Foreground color.

#### `inputColor` ####

Input value (number) color.

#### `font` ####

Font family.

#### `fontWeight` ####

Font weight.

#### `bgColor` ####

Background color.

## Events ##

In the template you can add change method to listen then knob changes
```handlebars
{{ember-knob change="changeKnob"}}
```

controllers/application.js

```
import Ember from "ember";

export default Ember.ObjectController.extend({
  actions: {

    changeKnob: function() {
      console.log("changeKnob");
    }
  }
});
```


## Want to help? ##

Please help us! We are always looking to improve this plugin. You can help us by submitting issues and pull requests.
