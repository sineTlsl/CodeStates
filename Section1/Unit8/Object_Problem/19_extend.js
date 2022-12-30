function extend(obj1, obj2) {
  for (let key in obj2) {
    if (!Object.keys(obj1).includes(key)) {
      obj1[key] = obj2[key];
    }
  }
}

const obj1 = {
  a: 1,
  b: 2,
};

const obj2 = {
  b: 4,
  c: 3,
};

extend(obj1, obj2);
console.log(obj1); // --> {a: 1, b: 2, c: 3}