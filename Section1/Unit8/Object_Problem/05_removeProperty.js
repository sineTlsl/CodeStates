function removeProperty(obj, property) {
  delete obj[property];
}

const obj = {
  name: 'Sam',
  age: 20,
};

removeProperty(obj, 'name');
console.log(obj.name); // --> undefined
