let output = sumTo(10);
console.log(output);

// 수(num)를 입력받아 1부터 num까지의 합을 리턴해야 합니다.
function sumTo(num) {
  if (num <= 1) return num;

  return num + sumTo(num - 1);
}
