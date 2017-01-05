⛱ Sandpit
==========

A playground for creative coding using JavaScript and the canvas element.

![An example animation of Sandpit](https://sandpitjs.com/assets/images/animation.gif)

Built in ES6, **Sandpit** uses dat.GUI to manage settings and encourages copy and paste sharing of ideas. It features a bunch of helpers so you can get straight down to coding.

- [Getting started](#getting-started)
- [Why use Sandpit?](#why-use-sandpit)
- [Demos and examples](#demos-and-examples)
- [Documentation](#documentation)
- [Want to contribute?](#want-to-contribute)
- [Who's behind it?](#whos-behind-it)

---

## Getting Started

If you're super up to date, just add Sandpit to your project and start using it:

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
var Sandpit = require('sandpit') // for es5
```

Alternatively, download it for [development](https://sandpitjs.com/dist/sandpit.js) or [minfied for production](https://sandpitjs.com/dist/sandpit.min.js) and include it in a script tag.

Either way, celebrate. You are a success.



## Why use Sandpit?

The goal of **Sandpit** is to normalise and simplify the process of creating coding—using code to make pretty things. This usually takes the form of drawing onto the Canvas element, in either a 2d or 3d context. It has resulted in a ton of tools, from [Processing.js](http://processingjs.org/) to [Three.js](http://threejs.org/), and an incredible community of people who have pushed the bar of [what can be done on the web](https://github.com/superhighfives/sandpit/wiki/Inspiration).

**Sandpit** supports a bunch of key features that aim to simplify creative coding. Specifically, helps with the following:
- Manages inputs, like touches, taps, clicks, force and the accelerometer, and takes care of touch event handling for multitouch on mobile so you don't have to worry about pinch to zoom
- Makes it easy to drop in settings, with a simple API for specifying ranges, types and defaults (with [dat.GUI](https://github.com/dataarts/dat.gui) behind the scenes)
- Stores settings in the query string, so you can copy and paste them without needing to touch a line of code
- Offers a bunch of helpers, covering maths, color and vector manipulation (kudos to [color](https://github.com/Qix-/color) and [Victor](http://victorjs.org/))
- Supports bringing your own canvas—for example, to simplify using [Three](http://threejs.org/)



## Demos and examples
There are a bunch of examples at <https://sandpitjs.com>, the source for which can be found at <https://github.com/superhighfives/sandpit/tree/master/src/demos>.



## Documentation
[Look no further—here's documentation of the full API](https://sandpitjs.com/docs).



## Want to contribute?

You 100% should. You can find out more about [contributing here](https://github.com/superhighfives/sandpit/blob/master/CONTRIBUTING.md).



## Who's behind it?

- Charlie Gleason [@superhighfives](https://twitter.com/superhighfives/)
- Glen Maddern [@glenmaddern](https://twitter.com/glenmaddern/)
