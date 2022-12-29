const arr = [1, 3, 5];
console.log(computeSumOfAllElements(arr));

function computeSumOfAllElements(arr) {
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}