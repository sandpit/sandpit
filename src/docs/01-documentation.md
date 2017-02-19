There are a bunch of example available in the [demos folder](https://github.com/sandpit/sandpit-site/tree/master/src/demos) of the library, and you can view them at <https://sandpitjs.com/>. They use many of the feature of **Sandpit**, and are designed to show the various ways you can interact with the library.

- [Getting Started](#getting-started)
- [Constructor](#constructor)
- [Methods](#methods)
- [Hooks](#hooks)
- [Properties](#properties)
- [Helpers](#helpers)

---

## Getting Started

Add Sandpit to your project:

``` shell
npm install sandpit --save
```

Or if you're into [Yarn](https://github.com/yarnpkg/yarn), that works too:

``` shell
yarn add sandpit
```

In your app, add:

``` js
import Sandpit from 'sandpit' // for es6
var Sandpit = require('sandpit').default // for es5
```

Celebrate. You are a success.

### Setting up a new project

If you're looking for a quick way to set up a sandpit with an ES6 friendly environment, you can use [create-react-app](https://github.com/facebookincubator/create-react-app):

``` shell
npm install create-react-app -g
create-react-app party
cd party
npm install sandpit --save
npm start
```

Then replace `src/index.js` with:

``` js
import Sandpit from 'sandpit'

var sandpit = new Sandpit('body', Sandpit.CANVAS)
sandpit.settings = {youAreGreat: {value: true}}
sandpit.loop = () => { console.log(sandpit.time) }
sandpit.start()
```

You can grab an example from [https://github.com/sandpit/sandpit-create-react-app-demo](https://github.com/superhighfives/sandpit-create-react-app-demo), too.

### Sticking with the script tag

Alternatively, you can [use the latest **Sandpit** version](https://sandpitjs.com/dist/sandpit.min.js) in the browser, which is useful for [Codepen](https://codepen.io/) and the like.

``` js
<script src="https://sandpitjs.com/dist/sandpit.min.js"></script>
<script>var sandpit = new Sandpit('body', Sandpit.CANVAS)</script>
```

You can see it in action using [ES6](https://codepen.io/superhighfives/pen/BpoPeJ), and [ES5](https://codepen.io/superhighfives/pen/RKroWB).

---

## Constructor
There are a number of ways to initialise a new **Sandpit**.

``` js
// 2D, using a container that Sandpit will add a canvas to
const sandpit = new Sandpit(document.querySelector('body'), Sandpit.CANVAS)
```
``` js
// You can also pass options, including 'retina', 'queryable' and 'stats'. 'retina' and `queryable` default to `true`.
const sandpit = new Sandpit(document.querySelector('body'), Sandpit.CANVAS, {retina: true, queryable: true, stats: false})
```
``` js
// 2D, using an existing canvas
const sandpit = new Sandpit(document.querySelector('#id_of_your_canvas'), Sandpit.CANVAS)
```
``` js
// 3D, using a string reference to a DOM element that Sandpit will try and find
const sandpit = new Sandpit('.some-container', Sandpit.WEBGL)
const renderer = new WebGLRenderer({canvas: sandpit.canvas, antialias: true})
```
``` js
// 3D, passing the canvas to Three.js
const sandpit = new Sandpit(document.querySelector('#id_of_your_canvas'), Sandpit.CANVAS)
const renderer = new WebGLRenderer({canvas: sandpit.canvas, antialias: true})
```

> NOTE: It's worth noting that Sandpit works a little differently if you're using it outside of ES6. If you're requiring it in ES5, you'll need to append `default` after the require: `var Sandpit = require('sandpit').default`. Utilities are available at `var Mathematics = require('sandpit').Mathematics`, etc.
> If you're using it via a `<script>` tag directly in the browser, you can use `var sandpit = new Sandpit('body', Sandpit.CANVAS)`, and the named utilities are available at Sandpit.Mathematics, Sandpit.Color, etc.
> This is due to the different ways in which ES5 and ES6 manage named exports. If you can think of a better way to handle this, you should 100% get in touch.

If **Sandpit** finds a DOM element that isn't a canvas, it'll add a canvas to it. If it finds a canvas element, it'll use that instead. Everyone wins!

**Sandpit** will automatically manage retina displays, or more specifically, displays with a pixel ratio greater than 1. If you'd like it to _not_ do that, you can pass a third property to the options: `new Sandpit('.container', Sandpit.CANVAS, {retina: false})`.

That will skip the retina bits in case you wanna handle them yourself, or if performance is a concern.

Once you've made a sandpit, you'll have access to a bunch of helpers and properties to get started.

> NOTE: *Sandpit* will not automatically fill the viewport - if you're looking for something fullscreen, you'll need to make your sandpit 100% width and height via CSS. This is to ensure flexibility for different applications. You can also use `sandpit.resize = () => {}` if you'd like to use `window.innerWidth` and `window.innerHeight`, but it's probably easier to just set `canvas { width: 100vw; height: 100vh; }` in your CSS. Up to you!

```
sandpit.resize = () => {
  sandpit.width = window.innerWidth
  sandpit.height = window.innerHeight
}
```

---

## Methods

### settings
To ensure you can mess with your **Sandpit** in real time, without having to change a line of code, you'll want to pass it some settings.

``` js
sandpit.settings = {}
```

Settings take the following format:

``` js
sandpit.settings = {
  name: {value: 'default'}
}
```

Simple as that. Once you've set the settings property **Sandpit** will start handling them for you, and you'll get a GUI (powered by dat.gui). There are a bunch of different setting types, and generally they will be chosen automatically.

#### Checkbox
If the value of a setting is a **boolean**, it will be a checkbox:

``` js
sandpit.settings = {
  beGreat: {value: true}
}
```

#### String
If the value of a setting is a **string**, it will be a string:

``` js
sandpit.settings = {
  beGreat: {value: "Yep no worries"}
}
```

#### Number
If the value of a setting is a **number**, it will be a number:

``` js
sandpit.settings = {
  beGreat: {value: 10}
}
```

From here you can add minimum, maximum, and step:

``` js
sandpit.settings = {
  beGreat: {value: 10, min: 5, max: 15, step: 1}
}
```

Which will work with floats and negatives, too:

``` js
sandpit.settings = {
  beGreatAndReallySmall: {value: 0.009, min: -0.009, max: 0.019, step: 0.001}
}
```

#### Color
If a setting has a **color** property set to true, it'll be a color:

``` js
sandpit.settings = {
  strokeColor: {value: 'red', color: true}
}
```

> Tip! Don't forget the color parameter. This tells `dat.GUI` that it should use colour picker. It would still work as a string, but you lose the fanciness. And no one wants that.

#### Editable
If you'd prefer a setting not be editable, just add the `editable: false` property to it. You can see this being used in the demos.

``` js
sandpit.settings = {
  demo: {value: 'generative', editable: false}
}
```

#### Sticky
If you'd prefer a setting to always revert to the default, regardless of what's in the query string, just add the `sticky: true` property to it. You can see this being used in the demos.

``` js
sandpit.settings = {
  demo: {value: 'generative', sticky: true}
}
```

#### Queryable
Out of the box, **Sandpit** will store and manage your settings as a query string. This means if you and some other great humans are working on something, and one of you finds a series of settings that looks great, you can copy and paste it to someone else (so long as they're running the same demo as you are).

If you _don't_ want settings to be stored in the query string, you can pass that option to the Sandpit constructor:

``` js
const sandpit = new Sandpit('body', Sandpit.CANVAS, {queryable: false})
```

Which can be good if you want to use Sandpit in a production environment, or if you're using pushState and it's breaking things.

#### Clear and reset
**Sandpit** will also automatically add a clear and reset button.

- **Reset** will destroy the query string, and refresh the page with default values.
- **Clear** will, if on a 2D canvas, clear a rectangle the size of the **Sandpit**. If it's a 3D canvas, it will reset the clearColor to transparent, and clear the `COLOR_BUFFER_BIT` and `DEPTH_BUFFER_BIT`.

It is possible to remove `clear` and `reset` if you'd prefer not to have displayed. To do this, pass a `boolean` with the key `clear`, or `reset`, instead of the setting object:

```
sandpit.settings = {
  youAreGreat: {value: true},
  reset: false,
  clear: false
}
```

### stats
If you'd like to check the performance of your sandpit, you can do so by adding `{stats: true}` to your options when initialising.

``` js
const sandpit = new Sandpit(document.querySelector('body'), Sandpit.CANVAS, {stats: true})
```

This will add [stats.js](https://github.com/mrdoob/stats.js/) to the top-left corner of the `body`, and will measure the `loop()`. If you'd like to manipulate its styles to move it around, you can access the dom element with `sandpit.stats.domElement` or `sandpit.stats.dom`.

### debug
If you want to see debug messages from **Sandpit** itself, you can.

``` js
sandpit.debug = true
sandpit.debug // returns true
```

And you can turn them back off, too:

``` js
sandpit.debug = false
```

### autoClear
**Sandpit** won't automatically clear the canvas on each loop, so if you want that to happen, you can set `autoClear` to true:

``` js
sandpit.autoClear = true
sandpit.autoClear // returns true
```

And you can also turn it off again.

``` js
sandpit.autoClear = true
```

### clear()
That said, if you need more control, you can manually clear in the loop (or anywhere, really).

``` js
sandpit.clear()
```

**Clear** will, if on a 2D canvas, clear a rectangle the size of the **Sandpit**. If it's a 3D canvas, it will reset the clearColor to transparent, and clear the `COLOR_BUFFER_BIT` and `DEPTH_BUFFER_BIT`.

### context
If you're looking for the context, so you can draw stuff on it, you can grab it with `context`

``` js
sandpit.context // returns context
```

### canvas
If you're looking for the canvas element you can grab it with `canvas`

``` js
sandpit.canvas // returns canvas element
```

### width
Returns the canvas width, from `canvas.clientWidth`.

``` js
sandpit.width // returns canvas.clientWidth
```

### height
Returns the canvas height, from `canvas.clientHeight`.

``` js
sandpit.height // returns canvas.clientWidth
```

### focusTouchesOnCanvas
Let's say you have a multitouch demo, and you want nothing else to be clickable. That's cool, you can do that. Just enable it:

``` js
sandpit.focusTouchesOnCanvas = true
sandpit.focusTouchesOnCanvas // returns true
```

> NOTE: You'll need to enable it before you run `start()`, as it will change the way the events are initialised.

It will mean your settings aren't interactive though, so it's primarily for presentations on mobile where you don't want pesky pinch-to-zoom stuff happening. You _should_ be okay with the standard touch events, which support multitouch, but hey, who knows?

### time
Once the loop starts, **Sandpit** will keep a timer running that you can use for time based stuff. It increments by 1 each frame.

``` js
sandpit.time // returns number
```

### fill(color)
On a 2D canvas, fill sets the fillStyle to the string passed, and fills the canvas.

> NOTE: Fill isn't currently supported for WEBGL instances

``` js
sandpit.fill('rgba(0, 0, 0, 0.5)')
```

### resizeCanvas()
Resizes the canvas to match the canvas element width, meaning if you can set and forget your canvas in CSS (for example, 100% width) without having to use `window.innerWidth` or similar. Portability!

If your canvas is 3D, it will also set the viewport using the `drawingBufferWidth` and `drawingBufferHeight`.

### start()
Once fired, **Sandpit** will:
- Set up all events
- Run the `setup()` hook, if defined
- Set up and start the loop

It is, essentially, the big red button that gets the party started.

``` js
sandpit.start()
```

### stop()
`stop()` does the opposite it of `start()`. When fired **Sandpit** will:
- Cancel the loop
- If the canvas exists, remove it and delete the element
- Remove the GUI
- Remove all events

``` js
sandpit.stop()
```

### random(seed)
Looking for seed-able randomness? Look no further. Pass a seed to random and it will return a function you can use to get a seeded random value. It uses [seedrandom](https://github.com/davidbau/seedrandom) under the hood.

``` js
const random = sandpit.random('hello.')
console.log(random()) // Always 0.9282578795792454
console.log(random()) // Always 0.3752569768646784
```

### get(url)
Looking to use data inside your sandpit? **Sandpit** offers a handy hook to [fetch](https://github.com/github/fetch), which will return a promise with the response.

``` js
const url = 'http://somegreatapi.com/api/v1/lolcopter.json'
sandpit.get(url).then((response) => {
  response = JSON.parse(response)
})
```

### clearQueryString
Clears the query string, in case you want to manually do that. Your call, you maverick.

``` js
sandpit.clearQueryString()
```

---

## Hooks
There are a ton of hooks you can use to make fancy things happen inside your sandpit. Some have existing behaviours that you can overwrite, and some are optional. You can use them as you need.

### loop()
The heart of animating your sandpit, `loop()` starts running when you fire `start()`. It uses `requestAnimationFrame` behind the scenes, too.

``` js
sandpit.loop = () => {}
```

### setup()
Setup is a hook you can use to get anything ready just before the `loop()` starts. All the events, settings and other calls will have been made, so you can access everything that the `loop()` can.

``` js
sandpit.setup = () => {}
```

### reset()
If you've got settings, **Sandpit** will automatically add a `clear` and `reset` option. If you don't have any settings, this will be ignored.

Normally reset will clear the query string and refresh the page, but you can override it if you'd prefer.

``` js
sandpit.reset = () => {}
```

### resize()
If you'd prefer to manage the resizing of the canvas object yourself, you can do that. You'll lose the fancy retina management though, but I believe in you.

``` js
sandpit.resize = () => {}
```

> NOTE: If you don't override the resize hook, resize will fire `change()` when the canvas element changes size.

> NOTE: The resize event is tied to the `window` object.

### touch()
The `touch()` hook fires when a mouse is clicked (`mousedown`) or a tap occurs (`touchstart`). The hook has access to the event, or you can take advantage of the normalised input from `sandpit.input`.

``` js
sandpit.touch = (event) => {}
```

### release()
The `release()` hook fires when a mouse is released (`mouseup`) or a tap finishes (`touchend`). The hook has access to the event, or you can take advantage of the normalised input from `sandpit.input`.

``` js
sandpit.release = (event) => {}
```

### move()
The `move()` hook fires when a mouse is moved (`mousemove`) or a tap is dragged (`touchmove`). The hook has access to the event, or you can take advantage of the normalised input from `sandpit.input`.

``` js
sandpit.move = (event) => {}
```

The mouse entering the canvas will also cause `sandpit.input.inFrame` to return `true`. Leaving the canvas will switch it back to `false`.

### accelerometer()
If the browser supports accelerometer events, the `accelerometer()` hook will fire as the device is moved. You can take advantage of the normalised input from `sandpit.input`.

``` js
sandpit.accelerometer = () => {}
```

The accelerometer uses the [GyroNorm.js](https://github.com/dorukeker/gyronorm.js/) library, and so has access to its range of normalised device orientation and device motion information.

`sandpit.input.accelerometer` has helpers to the `xAxis` (tipping the device back and forth), the `yAxis` (tilting the device left and right) and `rotation` (the direction the device is facing). They are also available as `gamma`, `beta` and `alpha`, if you prefer to stick to standard naming, or if you're using example code that follows that convention.

The `deviceorientation` data is available on the `do` property:
``` js
sandpit.input.accelerometer.do
```

The `devicemotion` data is available on the `dm` property:
``` js
sandpit.input.accelerometer.dm
```

---

## Properties

``` js
sandpit.input = {
  x: 50,
  y: 50,
  touches: [
    {
      x: 50,
      y: 50,
      previousX: 45,
      previousY: 55,
      force: 0.75
    },
    {
      x: 214,
      y: 87,
      previousX: 200,
      previousY: 85,
      force: 0.6
    }
  ],
  accelerometer: {
    // duplicated deviceorientation helpers
    xAxis:      // beta value
    yAxis:      // gamma value
    rotation:   // alpha value
    gamma:      // gamma value
    beta:       // beta value
    alpha:      // alpha value
    // deviceorientation events
    do: {
      alpha:    // alpha value
      beta:     // beta value
      gamma:    // gamma value
      absolute: // absolute value
    },
    // devicemotion events
    dm: {
      x:        // acceleration x value
      y:        // acceleration y value
      z:        // acceleration z value
      gx:       // accelerationIncludingGravity x value
      gy:       // accelerationIncludingGravity y value
      gz:       // accelerationIncludingGravity z value
      alpha:    // rotationRate alpha value
      beta:     // rotationRate beta value
      gamma:    // rotationRate gamma value
    }
  }
}
```

### input
The input property gives you normalised input data, allowing you to skip some of the heavy lifting of dealing with inputs.

#### input.x
The x position of the mouse or first touch.

#### input.y
The y position of the mouse or first touch.

#### input.accelerometer.xAxis
Tipping the device backwards and forwards.
> Also available as input.accelerometer.beta

#### input.accelerometer.yAxis
Tilting the device left and right.
> Also available as input.accelerometer.gamma

#### input.accelerometer.rotation
The direction the device is facing.
> Also available as input.accelerometer.alpha

#### input.touches
An array of touch objects, each with their current x and y position, and their previous x and y position (if the touch has moved).

If the interaction is from a mouse, the touches array will contain a single object - the x and y and previous x and y position of the mouse. This allows you to use the touches array as your primary source of input data without needing to differentiate between whether the interaction is touch or mouse based. Basically, you get multitouch for free.

> Full credit for this genuinely great idea goes to  [Sketch.js](https://github.com/soulwire/sketch.js) and [soulwire](https://soulwire.co.uk/). You really should go and check out **Sketch.js**—it was a big inspiration for **Sandpit**, it's super tiny, and there are a ton of great examples.

If you don't want to worry about that, though, you can just stick with `sandpit.input.x` and `sandpit.input.y`.

Finally, if force is available on the touch event (for example, if the interaction is on a force touch enabled iOS device) it will be available as the `force` property on each touch.

#### input.inFrame
Returns true when the mouse is inside the canvas.

---

## Helpers
There are a number of small helper libraries, both within Sandpit and external, that you can import to help make things easier. Many of the demos show examples of these in action.

### Is
A small utility to check if a reference is something.

#### Is.element(reference)
Returns true if the reference is a DOM element.
``` js
Is.element(document.createElement('div'))
// true
Is.element({})
// false
```

#### Is.array(reference)
Returns true if the reference is an array.
``` js
Is.array([])
// true
Is.array({})
// false
```

#### Is.object(reference)
Returns true if the reference is an object, _not_ an array.
``` js
Is.object({})
// true
Is.object([])
// false
```

#### Is.canvas(reference)
Returns true if the reference is a canvas element.
``` js
Is.canvas(document.createElement('canvas'))
// true
Is.canvas(document.createElement('div'))
// false
```

### Mathematics
A small utility to help with some simple maths stuff.

#### Mathematics.TWO_PI
Returns π * 2
``` js
Mathematics.TWO_PI
```

#### Mathematics.HALF_PI
Returns π / 2
``` js
Mathematics.HALF_PI
```

#### Mathematics.QUARTER_PI
Returns π / 4
``` js
Mathematics.QUARTER_PI
```

#### Mathematics.randomBetween(min, max, random = Math.random)
Returns a random float between two numbers, including negatives. You can also supply your own random function, if you'd prefer seeded results.

``` js
Mathematics.randomBetween(-50.5, -25.5)
```

#### Mathematics.randomFrom(array, random = Math.random)
Not _techically_ a mathematic function, but `randomFrom` will return a random item in an array, or a random key value pair from an object. You can also supply your own random function, if you'd prefer seeded results.

``` js
Mathematics.randomFrom(['you', 'are', 'so', 'great'])
```

### Vector
A hook for the [Victor.js](http://victorjs.org/) library, which gives a ton of helpers for manipulating vectors. [You can read the full API here](http://victorjs.org/).

Includes some additional functions, `vector.setLength(scalar)` and `vector.addLength(scalar)`.

> Credit to [Max Kueng](https://github.com/maxkueng/) and contributors for Victor. ❤️

### Color
A hook for the [Color](https://github.com/Qix-/color) library, which gives a ton of helpers for manipulating color. [You can read the full API here](https://github.com/Qix-/color)
> Credit to [Qix-](https://github.com/Qix-) for Color. ❤️


### Stats
A hook for the [Stats](https://github.com/mrdoob/stats.js) library, which visualises performance. [You can read about it here](https://github.com/mrdoob/stats.js/)

It is currently built into **Sandpit**, but if you were keen to record stats outside of the `loop()`, you could implement it manually with: ```import { Stats} from 'sandpit'```
> Credit to [mrdoob](https://github.com/mrdoob) for stats.js. ❤️
