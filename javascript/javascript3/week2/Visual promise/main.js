const redBox = document.querySelector("ul.marks li:nth-child(1)");
const blueBox = document.querySelector("ul.marks li:nth-child(2)");
const greenBox = document.querySelector("ul.marks li:nth-child(3)");

const redX = 20 - parseInt(redBox.style.left);
const redY = 300 - parseInt(redBox.style.top);

const blueX = 400 - parseInt(blueBox.style.left);
const blueY = 300 - parseInt(blueBox.style.top);

const greenX = 400 - parseInt(greenBox.style.left);
const greenY = 20 - parseInt(greenBox.style.top);

function translateOneByOne() {
  moveElement(redBox, {
    x: redX,
    y: redY,
  })
    .then(() => console.log("Red box moved alone"))
    .then(() =>
      moveElement(blueBox, {
        x: blueX,
        y: blueY,
      })
    )
    .then(() => console.log("Blue box moved alone"))
    .then(() =>
      moveElement(greenBox, {
        x: greenX,
        y: greenY,
      })
    )
    .then(() => console.log("Green box moved alone"));
}

function translateAllAtOnce() {
  Promise.all([
    moveElement(redBox, {
      x: redX,
      y: redY,
    }),
    moveElement(blueBox, {
      x: blueX,
      y: blueY,
    }),
    moveElement(greenBox, {
      x: greenX,
      y: greenY,
    }),
  ]).then(() => console.log("All boxes moved at once"));
}

//translateOneByOne();

translateAllAtOnce();
