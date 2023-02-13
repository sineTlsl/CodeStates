let output = and([true, true, false]);
console.log(output); // --> false

// 배열을 입력받아 모든 요소의 논리곱(and)을 리턴해야 합니다.
function and(arr) {
  if (arr.length === 0) {
    return true;
  }
  const head = arr[0];
  const tail = arr.slice(1);

  return head && and(tail);
}
