let output = computeWhenDouble(7);
console.log(output); // --> 11

function computeWhenDouble(interestRate) {
  let rate = 1 + interestRate / 100; // 수익률
  let money = 1;
  let year = 0;

  while (money < 2) {
    money = money * rate; // 복리 계산
    year++;
  }
  return year;
}
