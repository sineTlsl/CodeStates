function removeOddValues(obj) {
  for (let key in obj) {
    if (typeof(obj[key]) === 'number') {
      if (obj[key] % 2 === 1) {
        delete obj[key];
      }
    }
  }
}

const obj = {
  a: 2,
  b: 3,
  c: 4,
};

removeOddValues(obj);
console.log(obj); // --> { a: 2, c: 4 }