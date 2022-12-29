const arr = [1, 4, 3];
console.log(getLargestElement(arr));

function getLargestElement(arr) {
  let max = arr[0];

  for(let i = 1; i < arr.length; i++) {
    if (max < arr[i]) {
      max = arr[i];
    }
  }
  return max;
}