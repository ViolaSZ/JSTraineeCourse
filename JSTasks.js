function Task1(){
    for (let string = "#"; string.length < 8; string += "#"){
        console.log(string);
    }
}

function Task2(){
    for (let i = 0; i <= 100; i++){
        if ((i % 3 === 0) && (i % 5 === 0)){
            console.log("FizzBuzz");
        } else
            if (i % 3 === 0){
                console.log("Fizz");
            } else
                if (i % 5 === 0){
                    console.log("Buzz");
                } else
                    console.log(i);
    }
}

function createBoard(size){
	let board = "";
	for (let row = 0; row < size; row++) {
	for (let col = 0; col < size; col++) {
		if ((row + col) % 2 == 0) {
		board += " ";
		} else {
		board += "#";
		}
	}
	board += "\n";
	}

	return board;
}

function min(a,b){
	return a < b ? a : b;
}

function isEven(number){
	return Math.abs(number) === 0 ? true : Math.abs(number) === 1 ? false : isEven(Math.abs(number) - 2);
}

function countChar(string, symbol){
	let count = 0;
	for (let i = 0; i < string.length; i++) {
		if (string.toString().charAt(i) === symbol){
			count++;
		}
	}
	return count;
}

function range(start, end, step = 1){
	let array = [];
    if (step > 0){
        while (start <= end) {
            array.push(start);
            start += step;
        }
    } else
        while (start >= end) {
            array.push(start);
            start += step;
        }
	return array;
}

function sum(array){
	let sum = 0;
	for (let i = 0; i < array.length; i++) {
		sum += array[i];
	}
	return sum;
}

function reverseArray(array) {
    let reversedArray = [];
    for (let i = array.length - 1; i >= 0; i--) {
      reversedArray.push(array[i]);
    }
    return reversedArray;
}

function reverseArrayInPlace(array) {
    for (let i = 0; i < Math.floor(array.length / 2); i++) {
        let temp = array[i];
        array[i] = array[array.length - 1 - i];
        array[array.length - 1 - i] = temp;
    }
    return array;
}

function arrayToList(array) {
    let list = null;
    for (let i = array.length - 1; i >= 0; i--) {
      list = { value: array[i], rest: list };
    }
    return list;
}

function listToArray(list) {
    let array = [];
    for (let currentElement = list; currentElement; currentElement = currentElement.rest) {
      array.push(currentElement.value);
    }
    return array;
}

function prepend(element, list) {
    return { value: element, rest: list };
}

function nth(list, n) {
    if (!list) {
      return undefined;
    } else if (n === 0) {
      return list.value;
    } else {
      return nth(list.rest, n - 1);
    }
}

function deepEqual(a, b) {
	if (a === b) {
	  return true;
	}
  
	if (a === null || b === null) {
	  return false;
	}
  
	if (typeof a !== "object" || typeof b !== "object") {
	  return false;
	}
  
	let keysA = Object.keys(a);
	let keysB = Object.keys(b);
  
	if (keysA.length !== keysB.length) {
	  return false;
	}

	for (let key of keysA) {
	  if (!keysB.includes(key) || !deepEqual(a[key], b[key])) {
		return false;
	  }
	}
  
	return true;
}

function concatArrays(arrays){
	return arrays.reduce((array, element) => {
		return array.concat(element);
	});
}

function every(array, func){
	for (let element of array) {
		if (!func(element)){
			return false;
		}
	}
	return true;
}

function some(array, func){
	for (let element of array) {
		if (func(element)){
			return true;
		}
	}
	return false;
}

function vector(x, y) {
	this.x = x;
	this.y = y;
}

vector.prototype.plus = function (vector2) {
	return new vector(this.x + vector2.x, this.y + vector2.y);
};

vector.prototype.minus = function (vector2) {
	return new vector(this.x - vector2.x, this.y - vector2.y);
};

Object.defineProperty(vector.prototype, 'length', {
	get: function () {
		return Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y,2));
	}
})

function repeat(string, times) {
	let result = '';
	for (let i = 0; i < times; i++) {
		result += string;
	}
	return result
}

function textCell(text) {
	this.text = text.split('\n');
}

textCell.prototype.minWidth = function () {
	return this.text.reduce((width, line) => {
		return Math.max(width, line.length);
	}, 0);
}

textCell.prototype.minHeight = function () {
	return this.text.length;
}

textCell.prototype.draw = function (width, height) {
	let result = [];
	for (let i = 0; i < height; i++) {
		let line = this.text[i] || '';
		result.push(line + repeat(' ', width - line.length));
	}
	return result;
}

function stretchCell(inner, width, height) {
	this.inner = inner;
	this.width = width;
	this.height = height;
}

stretchCell.prototype.minWidth = function () {
	return Math.max(this.width, this.inner.minWidth());
};

stretchCell.prototype.minHeight = function () {
	return Math.max(this.height, this.inner.minHeight());
};

stretchCell.prototype.draw = function (width, height) {
	return this.inner.draw(width, height);
};

function Iterator (startValue, finishValue) {
	this.current = startValue;
	this.finish = finishValue;
}

Iterator.prototype.next = function (){
	let nextVal = this.current;
	++this.current;
	return nextVal;
}

Iterator.prototype.end = function (){
	return this.current > this.finish;
}

function logFive (sequence) {
	let log = '';
	for (let i = 0; i < 5 && !sequence.end(); i++) {
		log += sequence.next() + '\n';
	}
	return log;
}

function ArraySeq (array) {
	this.seq = new Iterator(0, array.length - 1);
	this.arr = array;
}

ArraySeq.prototype.next = function () {
	return this.arr[this.seq.next()];
}

ArraySeq.prototype.end = function () {
	return this.seq.end();
}

function RangeSeq (from, to) {
	this.seq = new Iterator(from, to);
}

RangeSeq.prototype.next = function () {
	return this.seq.next();
}

RangeSeq.prototype.end = function () {
	return this.seq.end();
}

function MultiplicatorUnitException() {}

function primitiveMultiply(a, b) {
	if (Math.random() < 0.5)
		return a * b;
	else
		throw new MultiplicatorUnitException();
}

function reliableMultiply(a, b) {
	try {
		return primitiveMultiply(a, b);
	} catch (error) {
		if (error instanceof MultiplicatorUnitException) {
			return reliableMultiply(a, b);
		}
	}
}

let box = {
	locked: true,
	unlock: function() { this.locked = false; },
	lock: function() { this.locked = true;  },
	_content: [],
	get content() {
		if (this.locked) throw new Error("Locked!");
		return this._content;
	}
};

function withBoxUnlocked(body) {
	box.unlock();
	try {
		body();
	}
	catch (error) { }
	finally {
		box.lock();
	}
}

withBoxUnlocked(function() {
	box.content.push("gold piece");
});

try {
	withBoxUnlocked(function() {
		throw new Error("Pirates on the horizon! Abort!");
	});
} catch (e) {
	console.log("Error raised:", e);
}

function fixedText() {
	let text = "'Irina said to Maksim, «You needn't do this exercise»'";
	return text.replace(/(^|\W)'|'(\W|$)/g, '$1"$2');
}

let month = function() {
	const monthArray = ["January", "February", "March", "April", "May", "June",
		"July", "August", "September", "October", "November", "December"];
	return {
		name: function(number) { return monthArray[number]; },
		number: function(name) { return monthArray.indexOf(name); }
	};
}();

function byTagName(node, tagName) {
	let elements = [];
	for (const element of node.children) {
		let child = element;
		if (child.nodeType === document.ELEMENT_NODE &&
			child.nodeName === tagName.toUpperCase()) {
			elements.push(child);
		}
		elements = elements.concat(byTagName(child, tagName));
	}
	return elements;
}
