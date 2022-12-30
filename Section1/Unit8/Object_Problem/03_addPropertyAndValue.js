function addPropertyAndValue(obj, property, value) {
  obj[property] = value;
}

let steve = {};
addPropertyAndValue(steve, 'isMale', true);
console.log(steve.isMale); // --> true