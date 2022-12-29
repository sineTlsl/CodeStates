const arr = ['a', 'b', 'c'];
console.log(getAllElementsButNth(arr, 1));

function getAllElementsButNth(arr, n) {
  // if (arr.length > n) {
  //   arr.splice(n, 1);
  //   return arr;
  // } else {
  //   return arr;
  // }
  arr.splice(n, 1);
  return arr;
}