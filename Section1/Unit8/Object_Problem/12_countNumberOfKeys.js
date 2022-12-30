function countNumberOfKeys(obj) {
  return Object.keys(obj).length;
}

const obj = {
  a: 1,
  b: 2,
  c: 3,
};

let output = countNumberOfKeys(obj);
console.log(output); // --> 3