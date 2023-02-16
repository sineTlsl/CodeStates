// 아래와 같이 정의된 피보나치 수열 중 n번째 항의 수를 리턴해야 합니다.
// 0번째 피보나치 수는 0이고, 1번째 피보나치 수는 1입니다. 그 다음 2번째 피보나치 수부터는 바로 직전의 두 피보나치 수의 합으로 정의합니다.
// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, ...

let fibonacci = function (n) {
  const memo = [0, 1];
  const aux = (n) => {
    // 이미 해결한적 있을 경우, 메모해둔 정답 리턴
    if (memo[n] !== undefined) return memo[n];
    // 새롭게 풀어야 하는 경우, 문제를 풀고 메모해둔다.
    memo[n] = aux(n - 1) + aux(n - 2);
    return memo[n];
  };
  return aux(n);
};

let output = fibonacci(9);
console.log(output); // --> 34
