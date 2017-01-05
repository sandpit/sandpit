import queryfetch from 'queryfetch'
import './styles/index.css'

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

const content = document.querySelector('.content')
content.appendChild(div)
if (window.innerHeight < content.offsetHeight) {
  content.style.height = `${content.offsetHeight}px`
}
