const sum = (a, b) => a + b;
sum(2, 3);

function sum(a) {
  return function (b) {
    return a + b;
  };
}

const sum = (a) => (b) => a + b;

const sumTwo = sum(2);
sumTwo(3);

sum(2)(3);

const sayHello = (who) => `Hello ${who}!`;

const greet = (greeting) => (who) => `${greeting} ${who}!`;

const sayHowdy = greet("Howdy");
const sayHello = greet("Hello");

const people = ["Antony", "Flavio", "Luca", "Francesca"];
people // start
  .map(sayHowdy)
  .forEach((item) => console.log(item));

const handleClick = (person) => (event) => email(person);

people.map((person) => <Button onClick={handleClick(person)}>{person}</Button>);

function factorial(num) {
  if (num === 1) {
    return num;
  }

  return num * factorial(num - 1);
}

function createMemoizedFunction(func) {
  const cache = {};

  return function memoizedFunction(num) {
    if (cache[num]) {
      console.log(num, "cache hit!");
      return cache[num];
    }

    console.log(num, "calculating...");

    const result = func(num);
    cache[num] = result;

    return result;
  };
}
