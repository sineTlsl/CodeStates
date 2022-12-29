const arr = [1, 2, 3];
console.log(removeFromFront(arr));

function removeFromFront(arr) {
  arr.shift();
  
  return arr;
}