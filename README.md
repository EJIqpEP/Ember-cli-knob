# Ember-cli-knob

## About
A dial component for Ember using http://anthonyterrien.com/knob/

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

#### Behaviors

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





## Want to help? ##

Please help us! We are always looking to improve this plugin. You can help us by submitting properly issues and pull requests.
