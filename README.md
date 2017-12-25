⛱ Sandpit
==========

A playground for creative coding using JavaScript and the canvas element.

``` shell
npm install sandpit --save
```
[![npm](https://img.shields.io/npm/v/sandpit.svg)](https://www.npmjs.com/package/sandpit) [![Build Status](https://travis-ci.org/sandpit/sandpit.svg?branch=master)](https://travis-ci.org/sandpit/sandpit)

> NOTE: `Sandpit` is pretty new, so the API is likely to change between now and 1.0. Help shape its ongoing development by [reporting issues and making suggestions](https://github.com/sandpit/sandpit/issues). 💖

![An example animation of Sandpit](https://sandpitjs.com/assets/images/animation.gif)

Built in ES6, **Sandpit** uses dat.GUI to manage settings and encourages copy and paste sharing of ideas. It features a bunch of helpers so you can get straight down to coding.

- [Getting started](#getting-started)
- [Browser support](#browser-support)
- [Why use Sandpit?](#why-use-sandpit)
- [Demos and examples](#demos-and-examples)
- [Documentation](#documentation)
- [Want to contribute?](#want-to-contribute)
- [Who's behind it?](#whos-behind-it)

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



## Browser support

Currently **Sandpit** targets modern browsers, including IE11 and Edge, and uses `babel-polyfill` when compiled for ES5.



## Why use Sandpit?

The goal of **Sandpit** is to normalise and simplify the process of creative coding—using code to make pretty things. This usually takes the form of drawing onto the Canvas element, in either a 2d or 3d context. It has resulted in a ton of tools, from [Processing.js](http://processingjs.org/) to [Three.js](http://threejs.org/), and an incredible community of people who have pushed the bar of [what can be done on the web](https://sandpitjs.com/docs/tutorial-02-inspiration.html).

**Sandpit** supports a bunch of key features that aim to simplify creative coding. Specifically, helps with the following:
- Manages inputs, like touches, taps, clicks, force and the accelerometer, and takes care of touch event handling for multitouch on mobile so you don't have to worry about pinch to zoom
- Makes it easy to drop in settings, with a simple API for specifying ranges, types and defaults (with [dat.GUI](https://github.com/dataarts/dat.gui) behind the scenes)
- Stores settings in the query string, so you can copy and paste them without needing to touch a line of code
- Offers a bunch of helpers, covering maths, color and vector manipulation (kudos to [color](https://github.com/Qix-/color) and [Victor](http://victorjs.org/))
- Supports bringing your own canvas—for example, to simplify using [Three](http://threejs.org/)



## Demos and examples

![Some examples of Sandpit in action](https://sandpitjs.com/assets/images/examples.jpg)

There are a bunch of examples at [https://sandpitjs.com](https://sandpitjs.com), the source for which can be found at [https://github.com/sandpit/sandpit-site/](https://github.com/sandpit/sandpit-site/).



## Documentation
[Look no further—here's documentation of the full API](https://sandpitjs.com/docs/tutorial-01-documentation.html).



## Want to contribute?

You 100% should. You can find out more about [contributing here](https://github.com/sandpit/sandpit/blob/master/CONTRIBUTING.md), and we more than appreciate [pull requests](https://github.com/sandpit/sandpit/pulls), [issues](https://github.com/sandpit/sandpit/issues), and seeing the rad stuff you've made.



## Who's behind it?

- Charlie Gleason [@superhighfives](https://twitter.com/superhighfives/)
- Glen Maddern [@glenmaddern](https://twitter.com/glenmaddern/)
