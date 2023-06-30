const Vector = require("../Vector.js");

// write test cases here to test the vector class
describe("Vector", () => {
  it("should create a vector with given x and y values", () => {
    const vector = new Vector(1, 2);
    expect(vector.x).toBe(1);
    expect(vector.y).toBe(2);
  });

  it("should create a vector from static mefthod of", () => {
    const vector = Vector.of(1, 2);
    expect(vector.x).toBe(1);
    expect(vector.y).toBe(2);
  });

  it("should add two vectors", () => {
    const vector1 = Vector.of(1, 2);
    const vector2 = Vector.of(3, 4);
    const vector3 = vector1.add(vector2);
    expect(vector3.x).toBe(4);
    expect(vector3.y).toBe(6);
  });

  it("should throw an error if add is called with a non-vector", () => {
    const vector1 = Vector.of(1, 2);
    expect(() => vector1.add(1)).toThrow();
  });

  it("should substract two vectors", () => {
    const vector1 = Vector.of(1, 2);
    const vector2 = Vector.of(3, 4);
    const vector3 = vector1.substract(vector2);
    expect(vector3.x).toBe(-2);
    expect(vector3.y).toBe(-2);
  });

  it("should throw an error if substract is called with a non-vector", () => {
    const vector1 = Vector.of(1, 2);
    expect(() => vector1.substract(1)).toThrow();
  });

  it("should multiply a vector by a scalar", () => {
    const vector1 = Vector.of(1, 2);
    const vector2 = vector1.multiply(2);
    expect(vector2.x).toBe(2);
    expect(vector2.y).toBe(4);
  });

  it("should throw an error if multiply is called with a non-number", () => {
    const vector1 = Vector.of(1, 2);
    expect(() => vector1.multiply("a")).toThrow();
  });

  it("should find the absolute value of a vector", () => {
    const vector1 = Vector.of(3, 4);
    expect(vector1.abs()).toBe(5);
  });

  it("should fined the unit vector of a vector", () => {
    const vector1 = Vector.of(3, 4);
    const vector2 = vector1.unit();
    expect(parseFloat(vector2.x.toFixed(1))).toBe(0.6);
    expect(parseFloat(vector2.y.toFixed(1))).toBe(0.8);
  });

  it("should find the angle of a vector", () => {
    const vector1 = Vector.of(3, 4);
    expect(parseFloat(vector1.angle().toFixed(1))).toBe(0.9);
  });
});
