const Util = require('./utils.js');
const MovingObject = require('./moving_object.js');

function Asteroid(options) {
  this.COLOR = 'grey';
  this.RADIUS = 15;
  MovingObject.call(this, options);
  
  // Return a randomly oriented vector with the given length.
  function randomVec (length) {
    const deg = 2 * Math.PI * Math.random();
    return Util.scale([Math.sin(deg), Math.cos(deg)], length);
  }
  // Scale the length of a vector by the given amount.
  function scale (vec, m) {
    return [vec[0] * m, vec[1] * m];
  }
}

Util.inherits(Asteroid, MovingObject);
