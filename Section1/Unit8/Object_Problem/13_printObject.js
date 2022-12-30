function printObject(obj) {
  let result = '';

  for (let key in obj) {
    result += key + ': ' + obj[key] + '\n';
  }
  return result;
}

const obj = { name: 'Steve', age: 13, gender: 'Male' };
let output = printObject(obj);
console.log(output); // -->
/*
name: Steve
age: 13
gender: Male
*/