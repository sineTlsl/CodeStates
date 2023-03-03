// 두 수를 입력받아 거듭제곱을 리턴해야 한다.
// base는 2 이상의 Number (밑 값)
// exponent는 0 이상의 Number (제곱 지수의 수)
function power(base, exponent) {
  // 제곱이니까 기본 값으로 1 리턴
  if (exponent === 0) return 1;

  // 연산을 할 때 마다 나머지를 구하고, 94906249로 나누어야 한다.
  if (exponent % 2 === 0) {
    let temp = power(base, exponent / 2) % 94906249;
    return (temp * temp) % 94906249;
  } else {
    let temp = power(base, (exponent - 1) / 2) % 94906249;
    return ((base * (temp * temp)) % 94906249) % 94906249;
  }
}

let output = power(3, 40);
console.log(output); // --> 19334827
// //  Math.pow(base, exponent) % 94906249 --> 19334827
