const arr1 = [1, 2];
const arr2 = [3, 4];

console.log(mergeArrays(arr1, arr2));

function mergeArrays(arr1, arr2) {
  // return arr1.concat(arr2);

  return [...arr1, ...arr2];
}
