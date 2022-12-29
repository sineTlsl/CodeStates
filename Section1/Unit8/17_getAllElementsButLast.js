const arr = [1, 2, 3, 4];
console.log(getAllElementsButLast(arr));

function getAllElementsButLast(arr) {
  arr.pop();
  
  return arr;
}
