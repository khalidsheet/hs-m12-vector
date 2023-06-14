class Vector {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  /**
   * Instasiate a new vector with the given x and y values
   * @param {*} x First vector
   * @param {*} y Second vector
   * @returns New instance of Vector
   */
  static of(x, y) {
    return new Vector(x, y);
  }

  /**
   * Add a vector to this vector
   * @param {*} vector Vector to add
   * @returns New instance of Vector
   * @throws Error if vector is not a Vector
   **/
  add(vector) {
    if (!(vector instanceof Vector)) {
      throw new Error("add() expects a Vector as parameter");
    }

    return Vector.of(this.x + vector.x, this.y + vector.y);
  }

  /**
   * Find the absolute value of the vector
   * @returns The absolute value of the vector
   */
  abs() {
    return Math.sqrt(this.x * this.x + this.y * this.y);
  }
}

module.exports = Vector;
