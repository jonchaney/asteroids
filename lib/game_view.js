
const MovingObject = require('./moving_object.js');

document.addEventListener("DOMContentLoaded", function(){
  const canvasEl = document.getElementById('canvas');
  canvasEl.width = 500;
  canvasEl.height = 500;


  const ctx = canvasEl.getContext('2d');

});

// const mo = new MovingObject(
//   { pos: [30, 30], vel: [10, 10], radius: 5, color: "#00FF00"}
// );
//
// mo.draw(ctx);
