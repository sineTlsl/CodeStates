let output = numberSearch("Hello6 9World 2, Nic8e D7ay!");
console.log(output); // --> 2

function numberSearch(str) {
  if (str.length === 0) return 0;

  let numArr = str
    .replace(/[^0-9]/g, "")
    .split("")
    .map(Number);
  let newStr = str.replace(/(\s*)/g, "");

  let sum = 0;
  if (numArr.length <= 1) {
    sum = numArr;
  } else {
    sum = numArr.reduce((acc, cur) => acc + cur);
  }

  return Math.round(sum / (newStr.length - numArr.length));
}
