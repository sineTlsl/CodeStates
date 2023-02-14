const largestProductOfThree = function (arr) {
  // TODO: 여기에 코드를 작성합니다.
  // 배열 음수 2개 이상일 경우,
  // let max = arr.reduce((acc, cur) => {
  //   return Math.max(acc, cur);
  // }, 0)
  // max;

  // 1. 음수의 숫자가 -기호 뺐을 때 양수보다 큰지 확인 (Math.abs())
  // 2. 음수가 2개인지 확인 (무조건 짝수어야 함) (if el < 0) cnt++;
  // 3. 위에 조건이 다 맞을 경우에 곱해주어야 함

  let sortArr = arr.sort((a, b) => b - a);
  // let newArr = sortArr.slice(0, 3);
  let max = 0;
  sortArr;

  let newArr = arr.filter((el) => {
    // if (Math.abs(el) > )
    return Math.abs(el);
  }, 0);
  newArr;

  max = newArr.reduce((a, b) => a * b);
  max;
};

let output = largestProductOfThree([-1, 2, -5, 7]);
console.log(output); // --> 35 (= -1 * -5 * 7)
