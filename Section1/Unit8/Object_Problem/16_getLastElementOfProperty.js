function getLastElementOfProperty(obj, property) {
  let key = obj[property]
    if(Array.isArray(key)) {
      return key[key.length - 1];
    }
}

const obj = {
  key: [1, 2, 5],
};

let output = getLastElementOfProperty(obj, 'key');
console.log(output); // --> 5