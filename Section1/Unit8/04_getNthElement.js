const arr = [1, 3, 5];
console.log(getNthElement(arr), 3);

function getNthElement(arr, index) {
  // TODO: 여기에 코드를 작성합니다.
  if (arr.length >= 1 && arr.length <= index) {
    return 'out of index range';
  } else {
    return arr[index];
  }
}
