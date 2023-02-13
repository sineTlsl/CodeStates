let output = flattenArr([[2, [[3]]], 4, [[[5]]]]);
console.log(output); // --> [2, 3, 4, 5]

// 다차원 배열을 입력받아 1차원 배열로 변환하여 리턴해야 합니다.
function flattenArr(arr) {
  let result = [];

  if (arr.length === 0) return result;

  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      let flatten = flattenArr(arr[i]);
      result = [...result, ...flatten];
    } else {
      result = [...result, arr[i]];
    }
  }

  return result;
}
