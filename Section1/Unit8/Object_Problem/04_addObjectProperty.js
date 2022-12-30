function addObjectProperty(obj1, property, obj2) {
  obj1[property] = obj2;
}

const person1 = {
  name: 'Joe',
  role: 'Team Member',
};

const person2 = {
  name: 'Steve',
  role: 'CEO',
};

addObjectProperty(person1, 'manager', person2);
console.log(person1.manager);