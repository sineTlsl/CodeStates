let output = reverseArr([1, 2, 3]);
console.log(output); // --> [3, 2, 1]

// 배열을 입력받아 순서가 뒤집힌 배열을 리턴해야 합니다.
function reverseArr(arr) {
  if (arr.length == 0) {
    return [];
  }

  const head = arr[0];
  const tail = arr.slice(1);

  return [...reverseArr(tail), ...[head]];
}
