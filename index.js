const Vector = require("./Vector");

const a = new Vector(1, 2);

const b = Vector.of(2, 0.5);

const sum = a.add(b);

console.log(sum);

console.log(sum.abs());
