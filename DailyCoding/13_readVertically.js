input = [
  //
  "hi",
  "wolrd",
];
output = readVertically(input);
console.log(output); // --> 'hwiolrd'

function readVertically(arr) {
  let result = "";
  const maxNum = Math.max(...arr.map((el) => el.length));

  for (let i = 0; i < maxNum; i++) {
    for (let j = 0; j < arr.length; j++) {
      // 요소의 값이 없다면
      if (arr[j][i] === undefined) continue;
      result += arr[j][i];
    }
  }

  return result;
}
