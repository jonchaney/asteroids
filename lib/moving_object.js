function MovingObject(options) {
  this.pos = options.pos;
  this.vel = options.vel;
  this.radius = options.radius;
  this.color = options.color;
}

MovingObject.prototype.draw = function(ctx) {
  ctx.begin();
  ctx.arc(this.pos[0], this.pos[1], this.radius, 0, 2 * Math.PI);
  ctx.strokeStyle = this.color;
  ctx.lineWidth = 10;
  ctx.stroke();
};

MovingObject.prototype.move = function(ctx) {
  this.pos[0] += this.vel[0];
  this.pos[1] += this.vel[1];
};


module.exports = MovingObject;
