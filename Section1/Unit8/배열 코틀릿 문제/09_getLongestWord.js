const str = 'Teamwork skills will take you anywhere';
console.log(getLongestWord(str));

function getLongestWord(str) {
  let arr = str.trim();
  let long = '';

  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i].length < arr[i + 1].length) {
      long = arr[i];
    }
  }
  return arr[1].length;
}

array.forEach(element => {
  
});