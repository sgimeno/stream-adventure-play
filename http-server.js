'use strict';
const http = require('http');
const fs = require('fs');
const through = require('through2');
const toUpper = through(write);

function write(buffer, encoding, next){
  this.push(buffer.toString().toUpperCase());
  next();
}

let server = http.createServer((req, res) => {
  if (req.method === 'POST') {
    req.pipe(toUpper).pipe(res);
  } else {
    res.end('beep boop\n');
  }
});

server.listen(process.argv[2]);
