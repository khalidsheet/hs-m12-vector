class Vector {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  /**
   * Instasiate a new vector with the given x and y values
   * @param {Number} x First vector
   * @param {Number} y Second vector
   * @returns New instance of Vector
   */
  static of(x, y) {
    return new Vector(x, y);
  }

  /**
   * Add a vector to this vector
   * @param {Vector} vector Vector to add
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

  /**
   * Substract a vector from this vector
   * @param {Vector} vector Vector to substract
   * @returns New instance of Vector
   * @throws Error if vector is not a Vector
   **/
  substract(vector) {
    if (!(vector instanceof Vector)) {
      throw new Error("substract() expects a Vector as parameter");
    }

    return Vector.of(this.x - vector.x, this.y - vector.y);
  }

  /**
   * Multiply this vector by a scalar
   * @param {Number} scalar Scalar to multiply by
   * @returns New instance of Vector
   * @throws Error if scalar is not a number
   * */
  multiply(scalar) {
    if (typeof scalar !== "number") {
      throw new Error("multiply() expects a number as parameter");
    }

    return Vector.of(this.x * scalar, this.y * scalar);
  }

  /**
   * Find the unit vector of this vector
   * @returns New instance of Vector
   * */
  unit() {
    return this.multiply(1 / this.abs());
  }

  /**
   * Find the direction angle of this vector
   * @returns The direction angle of the vector
   * */
  angle() {
    return Math.atan2(this.y, this.x);
  }
}

module.exports = Vector;
