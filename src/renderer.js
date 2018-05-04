class Renderer {
  constructor(canvas) {
    this.canvas = canvas
    this.context = canvas.getContext('2d')
    this.width = 64
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
    console.assert(
      bitmap.length === this.width * this.height,
      'Number of pixels in bitmap were incorrect'
    )
    for (let x = 0; x < this.width; x++) {
      for (let y = 0; y < this.height; y++) {
        const pixelIndex = y * this.width + x
        this.context.fillStyle =
          bitmap[pixelIndex] === 0 ? '#000000' : '#FFFFFF'
        this.context.fillRect(
          x * this.pixelWidth,
          y * this.pixelHeight,
          this.pixelWidth,
          this.pixelHeight
        )
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
    console.assert(
      sprite.length % 8 === 0,
      'The number of elements in a sprite must be divisible by 8'
    )
    const numberOfRows = sprite.length / 8

    for (let i = 0; i < numberOfRows; i++) {
      for (let j = 0; j < 8; j++) {
        const spriteIndex = i * 8 + j
        this.context.fillStyle =
          sprite[spriteIndex] === 0 ? '#000000' : '#FFFFFF'
        this.context.fillRect(
          x * this.pixelWidth + j * this.pixelWidth,
          y * this.pixelHeight + i * this.pixelHeight,
          this.pixelWidth,
          this.pixelHeight
        )
      }
    }
  }

  get pixelWidth() {
    return Math.ceil(this.canvas.width / this.width)
  }

  get pixelHeight() {
    return Math.ceil(this.canvas.height / this.height)
  }
}

module.exports = Renderer
