const arr = [1, 2];
console.log(addToFrontOfNew(arr, 3));

function addToFrontOfNew(arr, el) {
  // TODO: 여기에 코드를 작성합니다.
  return [el, ...arr];
}