const str = 'Radagast';
console.log(getAllLetters(str));

function getAllLetters(str) {
  let arr = [];

  for (let i = 0; i < str.length; i++) {
    arr[i] = str[i];
  }
  return arr; 
}
