/*
 * Credit for this playground, once again, goes to Sketch.js,
 * which is wild and you should totally check it out:
 * https://github.com/soulwire/sketch.js
 */
import Sandpit, { Color, Mathematics } from '../Sandpit'

const playground = () => {
  const sandpit = new Sandpit(document.querySelector('#root'), Sandpit.WEBGL)
  const canvas = sandpit.canvas()
  const ctx = sandpit.context()
  sandpit.autoClear(false)
  sandpit.settings({
    demo: {value: 'webgl', editable: false, sticky: true}
  })

  const vertex = `
    attribute vec2 aVertexPosition;

    void main() {
      gl_Position = vec4(aVertexPosition, 0.0, 1.0);
    }
  `
  const fragment = `
    #ifdef GL_ES
      precision highp float;
    #endif

    uniform vec4 uColor;

    void main() {
      gl_FragColor = uColor;
    }
  `

  sandpit.setup = () => {
    const backgrounds = ['hsl(175, 100%, 45%)', 'hsl(185, 69%, 63%)', 'hsl(39, 100%, 54%)', 'hsl(333, 100%, 68%)', 'hsl(84, 100%, 68%)', 'hsl(270, 100%, 80%)']
    let background = Color(Mathematics.randomFrom(backgrounds)).rgb().object()
    ctx.clearColor(background.r / 255, background.g / 255, background.b / 255, 1.0)
    ctx.enable(ctx.DEPTH_TEST)
    ctx.depthFunc(ctx.LEQUAL)
  }

  sandpit.loop = () => {
    ctx.clear(ctx.COLOR_BUFFER_BIT | ctx.DEPTH_BUFFER_BIT)

    const vs = ctx.createShader(ctx.VERTEX_SHADER)
    ctx.shaderSource(vs, vertex)
    ctx.compileShader(vs)

    const fs = ctx.createShader(ctx.FRAGMENT_SHADER)
    ctx.shaderSource(fs, fragment)
    ctx.compileShader(fs)

    const program = ctx.createProgram()
    ctx.attachShader(program, vs)
    ctx.attachShader(program, fs)
    ctx.linkProgram(program)

    var aspect = canvas.width / canvas.height
    var vertices = new window.Float32Array([
      -0.25, 0.5 * aspect, 0.5, 0.5 * aspect, 0.5, -0.5 * aspect,
      -0.25, 0.5 * aspect, 0.5, -0.5 * aspect, -0.5, -0.5 * aspect
    ])

    const vbuffer = ctx.createBuffer()
    ctx.bindBuffer(ctx.ARRAY_BUFFER, vbuffer)
    ctx.bufferData(ctx.ARRAY_BUFFER, vertices, ctx.STATIC_DRAW)
    ctx.useProgram(program)

    program.uColor = ctx.getUniformLocation(program, 'uColor')
    ctx.uniform4fv(program.uColor, [1.0, 1.0, 1.0, 0.25])

    program.aVertexPosition = ctx.getAttribLocation(program, 'aVertexPosition')
    ctx.enableVertexAttribArray(program.aVertexPosition)
    ctx.vertexAttribPointer(program.aVertexPosition, 2, ctx.FLOAT, false, 0, 0)

    ctx.drawArrays(ctx.TRIANGLES, 0, vertices.length / 2)
  }

  sandpit.start()

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
  document.querySelector('.overlay').style.color = '#000'
}

export default playground
