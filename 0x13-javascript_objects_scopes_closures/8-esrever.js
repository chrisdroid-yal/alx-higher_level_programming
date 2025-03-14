#!/usr/bin/node

const esrever = (list) => {
	let i = list.length - 1;
	let newList = [];
	while (i >= 0) {
		newList.push(list[i]);
		i--;
	}
	return newList;
}

module.exports = { esrever }
