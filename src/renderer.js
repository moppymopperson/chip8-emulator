class Renderer {
  constructor(canvas) {
    this.canvas = canvas
    this.context = canvas.getContext('2d')
    this.context.fillStyle = '#FF0000'
    this.context.fillRect(0, 0, canvas.width, canvas.height)
  }
}

module.exports = Renderer
