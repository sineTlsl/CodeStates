const arr = [1, 2];
console.log(addToFront(arr, 3));

function addToFront(arr, el) {
  arr.unshift(el);

  return arr;
}