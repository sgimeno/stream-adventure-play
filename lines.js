'use strict';
const through = require('through2');
const split = require('split');

let currentLine = 0;

function isOdd(n) {
   return Math.abs(n % 2) == 1;
}

process.stdin
  .pipe(split())
  .pipe(through(function (line, _, next) {

    if (isOdd(currentLine)) {
      this.push(line.toString().toUpperCase() + '\n');
    } else {
      this.push(line.toString().toLowerCase() + '\n');
    }

    currentLine++;

    next();
  }))
  .pipe(process.stdout)

  ;
