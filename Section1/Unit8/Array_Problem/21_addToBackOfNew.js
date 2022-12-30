const arr = [1, 2];
console.log(addToBackOfNew(arr, 3));

function addToBackOfNew(arr, el) {
  return [...arr, el];
}