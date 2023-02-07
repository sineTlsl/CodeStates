let output = computeSquareRoot(6);
console.log(output); // --> 2.45

// let 근사값 = 원래 숫자 / 2;
// while((근사값 ** 2) !== 원래 숫자) {
//    근사값 = (근사값 + (원래 숫자 / 근사값)) / 2;
// }

function computeSquareRoot(num) {
  let approxNum = num / 2;

  while (approxNum ** 2 !== num) {
    if (Number((approxNum ** 2).toFixed(2)) === num) {
      break;
    }
    approxNum = (approxNum + num / approxNum) / 2;
  }

  return Number(approxNum.toFixed(2));
}
