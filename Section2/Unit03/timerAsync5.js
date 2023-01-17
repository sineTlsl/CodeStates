// 비동기로 작동하는 코드를 제어할 수 있는 방법 세 번째 'async/await()'
// primse를 통해 비동기의 순서를 제어할 수 있지만, callback 함수와 같이 코드가 길어지고,
// 가독성이 낮아지는 Promise Hell이 발생하는 단점이 있다.  

// 함수 선언식
const printString = (string) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
      console.log(string);
    }, Math.floor(Math.random() * 100) + 1);
  });
};

const printAll = async () => {
  await printString('A');
  await printString('B');
  await printString('C');
};

printAll();