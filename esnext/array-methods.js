const arr = [1, 2, 3, 4, 5];

for (let i = 0; i < arr.length; i++) {
  const item = arr[i];
  console.log(item);
}

for (const item of arr) {
  const index = arr.indexOf(item);
}

arr.forEach((item, index, arr) => {
  console.log(item);
});

const double = (num) => num * 2;

const isEven = (num) => num % 2 === 0;

const square = (num) => num ** 2;

const sum = (num1, num2) => num1 + num2;

const doubles = arr.map(double);

const evens = arr.filter(isEven);

const firstEven = arr.find(isEven);

const firstEvenIndex = arr.findIndex(isEven);

const hasEven = arr.some(isEven);

const hasAllEvens = arr.every(isEven);

function sumSquareOfEvens(arr) {
  let sum = 0;

  for (const item of arr) {
    if (isEven(item)) {
      sum += square(item);
    }
  }

  return sum;
}

const theSum = arr.reduce((acc, item) => {
  acc += item;
  return acc;
}, 0);

const theSum = arr.reduce((acc, item) => {
  acc += item;
  return acc;
});

const theSum = arr.reduce(sum);

function sumSquareOfEvens(arr) {
  return arr.reduce((sum, item) => {
    squared = square(item);
    if (isEven(item)) {
      sum += squared;
    }
    return sum;
  }, 0);
}

function sumSquareOfEvens(arr) {
  const evens = arr.filter(isEven);
  const squares = evens.map(square);
  const theSum = squares.reduce(sum);
  return theSum;
}

function sumSquareOfEvens(arr) {
  return arr // start
    .filter(isEven)
    .map(square)
    .reduce(sum);
}

const squares = [];
for (let item of arr) {
  squares.push(square(item));
}
return squares;

// map
arr.reduce((acc, item) => {
  acc.push(square(item));
  return acc;
}, []);

// filter
arr.reduce((acc, item) => {
  if (isEven(item)) {
    acc.push(item);
  }
  return acc;
}, []);

// find
arr.reduce((acc, item) => {
  if (isEven(item) && acc == null) {
    acc = item;
  }
  return acc;
}, undefined);

const sumSquareOfSecondNumberIfEven = (num1, num2) =>
  isEven(num2) ? num1 + square(num2) : num1;

arr.reduce(sumSquareOfSecondNumberIfEven, 0);
