let output = isOdd(17);
console.log(output); // --> true

// 수를 입력받아 홀수인지 여부를 리턴해야 합니다.
function isOdd(num) {
  if (num === 0) {
    return false;
  }
  if (num === 1) {
    return true;
  }

  if (num < 0) {
    return isOdd(-num);
  }
  return isOdd(num - 2);
}
