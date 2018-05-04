const Renderer = require('./renderer.js')
const canvas = document.getElementById('game')
canvas.width = window.innerWidth
canvas.height = window.innerWidth / 2
const renderer = new Renderer(canvas)

const sprite = new Int8Array([
  0,
  0,
  0,
  1,
  1,
  0,
  0,
  0,
  0,
  1,
  1,
  0,
  0,
  1,
  1,
  0,
  0,
  0,
  1,
  1,
  1,
  1,
  0,
  0,
  0,
  0,
  0,
  1,
  1,
  0,
  0,
  0
])
renderer.drawSprite(sprite, 1, 1)
