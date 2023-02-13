let output = arrLength([1, -2, 1, 3]);
console.log(output); // --> 4

// 배열을 입력받아 그 길이를 리턴해야 합니다.

function arrLength(arr) {
  if (arr.isEmpty()) return 0;

  const tail = arr.slice(1);

  return 1 + arrLength(tail);
}
