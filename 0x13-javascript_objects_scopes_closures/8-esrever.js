#!/usr/bin/node

const esrever = (list) => {
  let i = list.length - 1;
  const newList = [];
  while (i >= 0) {
    newList.push(list[i]);
    i--;
  }
  return newList;
};

module.exports = { esrever };
