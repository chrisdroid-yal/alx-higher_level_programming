#!/usr/bin/node

const length = (array) => {
  let len = 0;
  while (true) {
    if (array[len] === undefined) { break; }
    len++;
  }
  return len;
};

if (length(process.argv) < 3) { console.log('No argument'); } else { console.log(process.argv[2]); }
