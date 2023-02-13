let output = arrProduct([1, -2, 1, 3]);
console.log(output); // --> -6

// 배열을 입력받아 모든 요소의 곱을 리턴해야 합니다.
function arrProduct(arr) {
  if (arr.length === 0) return 1;

  const head = arr[0];
  const tail = arr.slice(1);

  return head * arrProduct(tail);
}
