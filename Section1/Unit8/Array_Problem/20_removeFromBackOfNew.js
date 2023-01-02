const arr = [1, 2, 3];
console.log(removeFromBackOfNew(arr));

function removeFromBackOfNew(arr) {
  return arr.slice(0, -1);
}
