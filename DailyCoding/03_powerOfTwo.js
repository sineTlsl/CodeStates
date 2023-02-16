let output1 = powerOfTwo(16);
console.log(output1); // true

// 수를 입력받아 2의 거듭제곱인지 여부를 리턴해야 합니다.
function powerOfTwo(num) {
  if (num === 1) return true;
  if (num % 2 !== 0) return false;

  let result = 2;
  while (num > result) {
    result *= 2;
  }
  return num === result;
}
