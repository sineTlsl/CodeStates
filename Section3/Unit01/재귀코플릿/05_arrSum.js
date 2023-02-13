let output = arrSum([-1, -2, 1, 3]);
console.log(output); // --> 1

// 배열을 입력받아 모든 요소의 합을 리턴해야 합니다.

function arrSum(arr) {
  if (arr.length === 0) return 0;

  const head = arr[0];
  const tail = arr.slice(1);

  return head + arrSum(tail);
}
