function returnFunction() {
  return function () {
    return 'Hello HoF!'
  }
}

let output = returnFunction();
console.log(output()); // --> 'Hello HoF!'