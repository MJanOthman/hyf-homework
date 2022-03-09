// let canvas = document.getElementById("myCanvas");
// let ctx = canvas.getContext("2d");
// ctx.beginPath();
// ctx.arc(100, 75, 50, 0, 2 * Math.PI);
// ctx.stroke();
// ctx.fillStyle = "#FF0000";
// ctx.fill();

class Circle {
  constructor(x, y, r, startAngle, endAngle, fillColor) {
    this.x = x;
    this.y = y;
    this.r = r;
    this.startAngle = startAngle;
    this.endAngle = endAngle;
    this.fillColor = fillColor;
  }
  draw() {
    let canvas = document.getElementById("myCanvas");
    let ctx = canvas.getContext("2d");
    ctx.beginPath();
    ctx.arc(
      this.x,
      this.y,
      this.r,
      this.startAngle * Math.PI,
      this.endAngle * Math.PI
    );
    ctx.stroke();
    ctx.fillStyle = this.fillColor;
    ctx.fill();
  }
}

// const c1 = new Circle(75, 75, 50, 0, 2 * Math.PI, "green");
// c1.draw();
// const c2 = new Circle(100, 100, 20, 0, 2 * Math.PI, "yellow");
// c2.draw();
// const c3 = new Circle(50, 50, 40, 0, 2 * Math.PI, "red");
// c3.draw();

const randomColor = () => {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, "0")
    .toUpperCase()}`;
};

// setInterval(() => {
//   const cc = new Circle(
//     Math.random() * 500,
//     Math.random() * 150,
//     Math.random() * 10,
//     0 * Math.PI,
//     2 * Math.PI,
//     randomColor()
//   );
//   cc.draw();
// }, 100);

//Follow the mouse
onmousemove = function (e) {
  const cc = new Circle(
    e.clientX / 2,
    e.clientY / 4.2,
    Math.random() * 10,
    0 * Math.PI,
    2 * Math.PI,
    randomColor()
  );
  cc.draw();
};
