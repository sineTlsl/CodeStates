// 비동기로 작동하는 코드를 제어할 수 있는 방법 첫 번째 'callback()'
// Callback 함수를 통해 비동기 코드의 순서를 제어할 수 있다.
// 즉, 비동기를 동기화할 수 있다.

const printString = (string, callback) => {
  setTimeout(() => {
    console.log(string);
    callback();
  }, Math.floor(Math.random() * 100) + 1);
};

const printAll = () => {
  printString('A', () => {
    printString('B', () => {
      printString('C', () => {});
    })
  })
}

printAll();
