class Renderer {
  constructor(canvas) {
    this.canvas = canvas
    this.context = canvas.getContext('2d')
    this.width= 64
    this.height = 32
    this.context.fillStyle = '#FF0000'
    this.context.fillRect(0, 0, canvas.width, canvas.height)
  }

  /**
   * A one dimension array of values corresponding to pixel values.
   * There should be 1 entry per pixel, 0 for black, 1 for white.
   * Indexing is row major.
   * 
   * @param {Array<Number>} bitmap 
   */
  draw(bitmap) {
    console.assert(bitmap.length === this.width * this.height, "Number of pixels in bitmap were incorrect")
    const pixelWidth = this.canvas.width / this.width
    const pixelHeight = this.canvas.height / this.height
    for (let x = 0; x < this.width; x++) {
      for (let y = 0; y < this.height; y++) {
        const pixelIndex = y * this.width + x
        this.context.fillStyle = bitmap[pixelIndex] === 0 ? "#000000" : "#FFFFFF"
        this.context.fillRect(x*pixelWidth, y*pixelHeight, pixelWidth, pixelHeight)
      }
    }
  }

  /**
   * Draws a Nx8 sprite at location (x, y)
   * 
   * The sprite should be an array with 8N elements. The first 8 elements are treated
   * as the first row of pixels in a sprite. The 2nd 8 elements are the 2nd row, and
   * so forth. A 1 corresponds to a lit pixel and 0 to an unlit pixel.
   * 
   * @param {Array<Number>} sprite 
   * @param {Number} x 
   * @param {Number} y 
   */
  drawSprite(sprite, x, y) {
    console.assert(sprite.length % 8 === 0, "The number of elements in a sprite must be divisible by 8")
    const rows = sprite.length / 8
    const startIndex = y * this.width + x

  }
}

module.exports = Renderer
