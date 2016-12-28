import queryfetch from 'queryfetch'
import './index.css'

let demos = require('./demos/index').default

let playground
let div = document.createElement('div')
div.classList.add('demos')

Object.keys(demos).forEach(demo => {
  let link = document.createElement('a')
  link.appendChild(document.createTextNode(demo))
  link.addEventListener('mousedown', (event) => {
    if (playground) playground.sandpit.stop()
    playground = new demos[event.currentTarget.textContent]()
  })
  div.appendChild(link)
})

let params = queryfetch.parse(window.location.search)
playground = params.demo
  ? new demos[params.demo]()
  : new demos[Object.keys(demos)[0]]()

document.querySelector('.overlay').appendChild(div)
