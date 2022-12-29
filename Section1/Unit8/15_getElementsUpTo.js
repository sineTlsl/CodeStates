const arr = ['a', 'b', 'c', 'd', 'e'];
console.log(getElementsUpTo(arr, 3));

function getElementsUpTo(arr, n) {
  return arr.length <= n ? new Array() : arr.slice(0, n);
}