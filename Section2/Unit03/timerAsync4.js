// Promise - A, B, C 문자열 비동기 순서 제어
const printString = (string) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
      console.log(string);
    }, Math.floor(Math.random() * 100) + 1);
  });
};

const printAll = () => {
  printString('A')
    .then(() => {
      return printString('B');
    }).then(() => {
      return printString('C');
    });
};

printAll();