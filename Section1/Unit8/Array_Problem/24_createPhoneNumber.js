const arr = [0, 1, 0, 1, 2, 3, 4, 5, 6, 7, 8];
console.log(createPhoneNumber(arr));

function createPhoneNumber(arr) {
  let result = '';
  arr.splice(-4, 0, "-");

  if (arr.length <= 9) {
    result = '(010)';
    return [result, ...arr].join("");
  } else {
    arr.splice(0, 0, "(");
    arr.splice(4, 0, ")");
    return arr.join("");
  }
}