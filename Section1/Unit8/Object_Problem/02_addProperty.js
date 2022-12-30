function addProperty(obj, property) {
  obj[property] = true;
}

let steve = {};
addProperty(steve, 'isMale');
console.log(steve.isMale); // --> true