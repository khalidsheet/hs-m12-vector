const Vector = require("./Vector");

const a = new Vector(3, 3);

const b = Vector.of(2, 0.5);

const sum = a.add(b);

console.log({ sum });

console.log({ sum: sum.abs() });

const diff = a.substract(b);

console.log({ diff });

const mult = a.multiply(2);

console.log({ mult });

const unit = a.unit();

console.log({ unit });

const angle = a.angle();

console.log({ angle });
