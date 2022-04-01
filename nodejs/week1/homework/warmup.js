console.log("inside warmup file");
let pi = Math.PI;
class circles {
  constructor(radius) {
    this.radius = radius;
  }
  getDiameter() {
    return this.radius * 2;
  }
  getCircumference() {
    return 2 * pi * this.radius;
  }
  getArea() {
    return pi * pi * this.radius;
  }
}

const c1 = new circles(2);
console.log(c1.getArea());
console.log(c1.getDiameter());
console.log(c1.getCircumference());

const c2 = new circles(5);
console.log(c2.getArea());
console.log(c2.getDiameter());
console.log(c2.getCircumference());

const c3 = new circles(7);
console.log(c3.getArea());
console.log(c3.getDiameter());
console.log(c3.getCircumference());

const c4 = new circles(10);
console.log(c4.getArea());
console.log(c4.getDiameter());
console.log(c4.getCircumference());

const c5 = new circles(15);
console.log(c5.getArea());
console.log(c5.getDiameter());
console.log(c5.getCircumference());
