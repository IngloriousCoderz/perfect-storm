const arr = ["a", "b", "c", "d"];
// const firstElement = arr[0];
// const secondElement = arr[1];
const [firstElement, secondElement, ...otherElements] = arr;
arr[arr.length - 1];
const clone = [...arr];

const obj = { a: "1", b: "2", c: "3" };
// const firstProperty = obj.a;
const { a: firstProperty, b, ...otherProperties } = obj;
const clone = { ...obj };

function fetchData(param1, param2, ...otherParams) {}

console.log("Hello", "world", "!");

const APP_ID = "app_id";

const HELLO = "app_id";

for (let key in obj) {
  if (obj.hasOwnProperty(key)) {
    const value = obj[key];
  }
}

for (let item of arr) {
  const index = arr.indexOf(item);
}

function* createIterator() {
  yield 1;
  return 2;
}

const it = createIterator();
it.next()
it.value()

const arr = [1, 2, 4, 1, 3]

[...new Set(arr)]

const dest = Object.assign({}, source0, source1, source2)

const source1 = { a: '1', b: '2', c: '3' };
const source2 = { b: '4', d: '5' };

const dest = { ...source1, ...source2 };

Object.keys(obj).forEach(key => {
  const value = obj[key]

})

Object.values(obj).forEach(value => {

})

Object.entries(obj).forEach(([key, value]) => {

})

[1, 2, 3].includes(2);

if (status === 200 || status === 201 || status === 204)

const SUCCESS_STATUSES = [200, 201, 204]

if (SUCCESS_STATUSES.includes(status))

const [, secondElement] = arr

await Promise.all(promises)