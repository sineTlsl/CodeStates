let output = superIncreasing([-2247, 1093, 1064]);
console.log(output); // --> true

function superIncreasing(arr) {
  let sum = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] <= sum) {
      return false;
    }
    sum = sum + arr[i];
  }
  return true;
}
