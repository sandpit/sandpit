/*
 * Inspired by and forked from Stefan Weck's incredible Sea Waves:
 * https://codepen.io/stefanweck/details/YNPdRR
 */

import Sandpit, { Mathematics } from '../Sandpit'

const playground = () => {
  // Make a new sandpit
  const sandpit = new Sandpit(document.querySelector('#root'), Sandpit.CANVAS)
  sandpit.settings = {
    demo: {value: 'svg', editable: false, sticky: true},
    goo: {value: false}
  }

  let circleContainers = []
  let context = sandpit.context

  const initializeCircleContainers = () => {
    for (let x = 0; x < sandpit.width + 100; x += 100) {
      for (let y = 0; y < sandpit.height + 100; y += 80) {
        // Initialize a new instance of the CircleContainer class
        let circleContainer = new CircleContainer(x, y)

        // Let the CircleContainer initialize it's children
        circleContainer.initializeCircles()

        // Add the container to our array of CircleContainer objects
        circleContainers.push(circleContainer)
      }
    }
  }

  const update = () => {
    for (let i = 0; i < circleContainers.length; i++) {
      circleContainers[i].update()
    }
  }

  const render = () => {
    sandpit.clear()
    for (let i = 0; i < circleContainers.length; i++) {
      circleContainers[i].render()
    }
  }

  sandpit.resize = () => {
    sandpit.resizeCanvas()
    circleContainers = []
    initializeCircleContainers()
  }

  sandpit.loop = () => {
    update()
    render()
  }

  function CircleContainer (x, y) {
    let position = {x, y}

    let numberOfCircles = 5
    let circles = []

    let baseRadius = 5
    let bounceRadius = 100
    let singleSlice = Mathematics.TWO_PI / numberOfCircles

    this.initializeCircles = () => {
      for (let i = 0; i < numberOfCircles; i++) {
        circles.push(new Circle(position.x, position.y + Math.random(), baseRadius, bounceRadius, i * singleSlice))
      }
    }

    this.update = () => {
      for (let i = 0; i < numberOfCircles; i++) {
        circles[i].update()
      }
    }

    this.render = () => {
      for (let i = 0; i < numberOfCircles; i++) {
        circles[i].render()
      }
    }
  }

  function Circle (x, y, baseRadius, bounceRadius, angleCircle) {
    let basePosition = {x, y}
    let position = {x, y}
    let speed = 0.01
    let baseSize = 10
    let size = 10
    let angle = (x + y)

    this.update = () => {
      position.x = basePosition.x + Math.cos(angleCircle) * (Math.sin(angle + angleCircle) * bounceRadius + baseRadius)
      position.y = basePosition.y + Math.sin(angleCircle) * (Math.sin(angle + angleCircle) * baseRadius)
      size = Math.cos(angle) * 8 + baseSize

      angle += speed
    }

    this.render = () => {
      context.fillStyle = 'hsl(' + Math.sin(basePosition.x) * 100 + ', 100%, ' + size * 4 + '%)'
      context.beginPath()
      context.arc(position.x, position.y, size, 0, Mathematics.TWO_PI)
      context.fill()
    }
  }

  sandpit.change = () => {
    sandpit.canvas.style.filter = sandpit.settings.goo ? 'url("#shadowed-goo")' : ''
  }

  initializeCircleContainers()

  // Get this party started!
  sandpit.start()
  // Initialise the goo!
  sandpit.change()

  // Keep the demo in the query string when resetting
  sandpit.reset = () => {
    // Keep the demo
    window.history.pushState({}, null, `/?demo=${sandpit.settings.demo}`)
    // Reload the page
    window.location.reload()
  }

  // Give a hook back to the sandpit
  playground.prototype.sandpit = sandpit

  // Update the text color of the overlay to be visible
  document.querySelector('.overlay').style.color = '#fff'
  document.querySelector('body').style.background = '#000'
}

export default playground
