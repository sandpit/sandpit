/*
 * The purpose of this playground is to show an example
 * of vanilla WebGL being used on a sandpit - vanilla WebGL
 * is pretty verbose, so don't panic if this makes no sense
 */
import Sandpit, { Color, Mathematics } from '../../../lib/Sandpit'

const playground = () => {
  // Make a sandpit
  const sandpit = new Sandpit(document.querySelector('#root'), Sandpit.WEBGL)
  const canvas = sandpit.canvas
  const ctx = sandpit.context
  sandpit.autoClear = false
  sandpit.settings = {demo: {value: 'webgl', editable: false, sticky: true}}

  // Define an incredibly simple vertex shader
  const vertex = `
    attribute vec2 aVertexPosition;

    void main() {
      gl_Position = vec4(aVertexPosition, 0.0, 1.0);
    }
  `

  // Define an incredibly simple fragment shader
  const fragment = `
    #ifdef GL_ES
      precision highp float;
    #endif

    uniform vec4 uColor;

    void main() {
      gl_FragColor = uColor;
    }
  `

  // Create the vertex shader and compile it
  const vs = ctx.createShader(ctx.VERTEX_SHADER)
  ctx.shaderSource(vs, vertex)
  ctx.compileShader(vs)

  // Create the fragment shader and compile it
  const fs = ctx.createShader(ctx.FRAGMENT_SHADER)
  ctx.shaderSource(fs, fragment)
  ctx.compileShader(fs)

  // Create a program
  const program = ctx.createProgram()
  ctx.attachShader(program, vs)
  ctx.attachShader(program, fs)
  ctx.linkProgram(program)

  // Create a buffer
  const vbuffer = ctx.createBuffer()
  ctx.bindBuffer(ctx.ARRAY_BUFFER, vbuffer)
  ctx.useProgram(program)

  sandpit.setup = () => {
    // Define the background color of the webGL scene,
    // and set some basic depth features
    const backgrounds = ['hsl(175, 100%, 45%)', 'hsl(185, 69%, 63%)', 'hsl(39, 100%, 54%)', 'hsl(333, 100%, 68%)', 'hsl(84, 100%, 68%)', 'hsl(270, 100%, 80%)']
    let background = Color(Mathematics.randomFrom(backgrounds)).rgb().object()
    ctx.clearColor(background.r / 255, background.g / 255, background.b / 255, 1.0)
    ctx.enable(ctx.DEPTH_TEST)
    ctx.depthFunc(ctx.LEQUAL)
  }

  sandpit.loop = () => {
    // Clear the canvas
    ctx.clear(ctx.COLOR_BUFFER_BIT | ctx.DEPTH_BUFFER_BIT)

    // Define the aspect ratio
    var aspect = canvas.width / canvas.height

    // Make some verticies - in this case, a weird square
    var vertices = new window.Float32Array([
      -0.25, 0.5 * aspect, 0.5, 0.5 * aspect, 0.5, -0.5 * aspect,
      -0.25, 0.5 * aspect, 0.5, -0.5 * aspect, -0.5, -0.5 * aspect
    ])

    // Define the buffer data
    ctx.bufferData(ctx.ARRAY_BUFFER, vertices, ctx.STATIC_DRAW)

    // Set the uniform color
    program.uColor = ctx.getUniformLocation(program, 'uColor')
    ctx.uniform4fv(program.uColor, [1.0, 1.0, 1.0, 1.0])

    // Set the vertex position / pointer
    program.aVertexPosition = ctx.getAttribLocation(program, 'aVertexPosition')
    ctx.enableVertexAttribArray(program.aVertexPosition)
    ctx.vertexAttribPointer(program.aVertexPosition, 2, ctx.FLOAT, false, 0, 0)

    // Draw the arrays
    ctx.drawArrays(ctx.TRIANGLES, 0, vertices.length / 2)
  }

  // Start the loop
  sandpit.start()

  // Keep the demo in the query string when resetting
  sandpit.reset = () => {
    // Keep the demo
    window.history.replaceState({}, null, `${sandpit._getPathFromUrl()}?demo=${sandpit.settings.demo}`)
    // Reload the page
    window.location.reload()
  }

  // Give a hook back to the sandpit
  playground.prototype.sandpit = sandpit

  // Update the text color of the overlay to be visible
  document.querySelector('.overlay').style.color = '#000'
  document.querySelector('body').style.background = '#fff'
}

export default playground
