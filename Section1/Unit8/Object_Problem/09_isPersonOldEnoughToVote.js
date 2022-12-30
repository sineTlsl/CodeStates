function isPersonOldEnoughToVote(person) {
  for (key in person) {
    if (key === 'age') {
      return person[key] >= 18;
    }
  }
}

let obj = {
  age: 19,
};

let output = isPersonOldEnoughToVote(obj);
console.log(output); // --> true