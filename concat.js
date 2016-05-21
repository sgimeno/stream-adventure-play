'use strict';
const concat = require('concat-stream');

process.stdin
.pipe(concat((src) => {
  let o = src.toString().split('').reverse().join('');
  console.log(o);
}))

;
