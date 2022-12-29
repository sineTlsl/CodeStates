const arr = [1, 2, 3, 4];
console.log(getEvenNumbers(arr));

function getEvenNumbers(arr) {
  // 배열을 다 돌려서, 짝수인 경우를 확인해야 한다.
  let even = [];

  arr.forEach(el => {
    if(el % 2 === 0) {
      even.push(el);
    }
  });
  return even;
}
