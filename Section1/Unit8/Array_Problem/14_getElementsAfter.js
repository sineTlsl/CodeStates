const arr = ['a', 'b', 'c', 'd', 'e'];
console.log(getElementsAfter(arr, 2));

function getElementsAfter(arr, n) {
  return arr.length >= n ? arr.slice(-n + 1) : new Array(); 
}