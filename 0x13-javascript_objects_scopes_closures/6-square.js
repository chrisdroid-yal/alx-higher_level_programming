#!/usr/bin/node

const Square = require('./5-square');

class SquareTwo extends Square {
  constructor (size) { super(size, size); }
  charPrint (c) {
    const ch = c || 'X';
    let i = 0;
    while (i < this.height) {
      console.log(ch.repeat(this.width));
      i++;
    }
  }
}

module.exports = SquareTwo;
