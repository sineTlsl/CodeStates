function addFullNameProperty(obj) {
  for (let key in obj) {
    obj.fullName = obj.firstName + ' ' + obj.lastName;
  }
}

const person = {
  firstName: 'Jade',
  lastName: 'Smith',
};

addFullNameProperty(person);
console.log(person.fullName); // --> 'Jade Smith'