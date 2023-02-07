let output = computeSquareRoot(6);
console.log(output); // --> 2.45

function computeSquareRoot(num) {
  let babylonian = 1;
  for (let i = 0; i < 15; i++) {
    babylonian = (babylonian + num / babylonian) / 2;
  }
  return +babylonian.toFixed(2);
}
