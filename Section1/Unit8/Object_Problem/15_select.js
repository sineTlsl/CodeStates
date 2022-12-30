function select(arr, obj) {
  let result = {};

  for (let key in obj) {
    arr.forEach(el => {
      if (el === key) {
        result[el] = obj[key];
      }
    })
  }
  return result;
}

const arr = ['a', 'c', 'e'];
const obj = { a: 1, b: 2, c: 3, d: 4 };

let output = select(arr, obj);
console.log(output); // --> { a: 1, c: 3 }