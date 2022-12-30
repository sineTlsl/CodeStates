function getAllButLastElementOfProperty(obj, key) {
  return Array.isArray(obj[key]) ? obj[key].slice(0, -1) : new Array();
}

const obj = {
  key: [1, 2, 3],
};

let output = getAllButLastElementOfProperty(obj, 'key');
console.log(output); // --> [1,2]