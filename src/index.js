const Renderer = require('./renderer.js')
const canvas = document.getElementById('game')
canvas.width = window.innerWidth
canvas.height = window.outerHeight
const renderer = new Renderer(canvas)

const image = new Int8Array(renderer.width * renderer.height).fill(0)
renderer.draw(image)
