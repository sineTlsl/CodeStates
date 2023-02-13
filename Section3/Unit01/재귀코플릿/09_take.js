let output = take(2, [1, -2, 1, 3]);
console.log(output); // --> [1, -2]

// 수(num)와 배열을 입력받아 차례대로 num개의 요소만 포함된 새로운 배열을 리턴해야 합니다.
function take(num, arr) {
  if (num === 0 || arr.length === 0) {
    return [];
  }

  const head = arr[0];
  const tail = arr.slice(1);

  return [...[head], ...take(num - 1, tail)];
}
