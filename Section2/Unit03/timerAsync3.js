// 비동기로 작동하는 코드를 제어할 수 있는 방법 두 번째 'Promise'
// Callback Hell의 현상을 방지하기 위해서 Promise를 사용한다.

let promise = new Promise((resolve, reject) => {
  // 1. 정상적으로 처리되는 경우
  resolve("성공");
  // 2. 에러가 발생하는 경우
  // reject(new Error("에러"));
});

// promise.then(value => {
//   console.log(value);
// }).catch(error => {
//   console.log(error);
// }).finally(() => {
//   console.log("성공이든 실패든 작동!");
// })
promise.then((value) => {
  console.log(value);
  return '성공1';
}).then((value) => {
  console.log(value);
  return '성공2';
}).then((value) => {
  console.log(value);
  return '성공3';
}).catch((error) => {
  console.log(error);
  return '실패';
}).finally(() => {
  console.log('성공이든 실패든 작동!');
});