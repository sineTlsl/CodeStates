function mostFrequentCharacter(str) {
  // TODO: 여기에 코드를 작성합니다.
  let arr = str.replace(/(\s*)/g, '').split('');
  let obj = {};
  let result = '';
  let max = 0;

  arr.forEach(el => {
    if (obj[el]) {
      obj[el] = obj[el] + 1;
    } else {
      obj[el] = 0 + 1;
    }

    if (max < obj[el]) {
      max = obj[el];
      result = el;
    }
  });
  return result;
}

let output = mostFrequentCharacter('apples not oranges');
console.log(output); // --> 'p'