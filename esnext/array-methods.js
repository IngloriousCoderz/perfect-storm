const arr = [1, 2, 3, 4, 5];

for (let i = 0; i < arr.length; i++) {
  const item = arr[i];
  console.log(item);
}

for (const item of arr) {
  const index = arr.indexOf(item);
}

arr.forEach((item, index) => {
  console.log(item);
});

const isEven = (num) => num % 2 === 0;

const doubles = arr.map((item, index) => {
  return item * 2;
});

const evens = arr.filter(isEven);

const firstEven = arr.find(isEven);

const firstEvenIndex = arr.findIndex(isEven);

const hasEven = arr.some(isEven);

const hasAllEvens = arr.every(isEven);

function sumSquareOfEvens(arr) {
  let sum = 0;

  for (const item of arr) {
    if (item % 2 === 0) {
      const square = item ** 2;
      sum += square;
    }
  }

  return sum;
}

// arr.reduce()
