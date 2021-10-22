// (f o g)(x) = f(g(x))
// compose(f, g)(x) = f(g(x))

const compose =
  (...fns) =>
  (x) =>
    fns.reduceRight((acc, fn) => fn(acc), x);

const pipe =
  (...fns) =>
  (x) =>
    fns.reduce((acc, fn) => fn(acc), x);

const greet = (greeting) => (str) => `${greeting} ${str}`;
const shout = (str) => str.toUpperCase();
const punctuate = (punctuation) => (str) => str + punctuation;
const wrapInHtml = (tag) => (str) => `<${tag}>${str}</${tag}>`;

const convert = compose(
  wrapInHtml("h1"),
  punctuate("!"),
  shout,
  greet("Hello")
);

// const convert = pipe(greet, shout, punctuate, wrapInHtml);

// const convert = (str) => {
//   return wrapInHtml(punctuate(shout(greet(str))));

//   let result = str;
//   result = greet(result);
//   result = shout(result);
//   result = punctuate(result);
//   result = wrapInHtml(result);
//   return result;
// };

module.exports = { greet, shout, punctuate, wrapInHtml, convert };

// acc = 42
// acc = f(42)
// acc = g(acc) = g(f(42))
