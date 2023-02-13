let output = or([true, true, false]);
console.log(output); // --> true

// 배열을 입력받아 모든 요소의 논리합(or)을 리턴해야 합니다.
function or(arr) {
  if (arr.length === 0) {
    return false;
  }

  const head = arr[0];
  const tail = arr.slice(1);

  return head || or(tail);
}
