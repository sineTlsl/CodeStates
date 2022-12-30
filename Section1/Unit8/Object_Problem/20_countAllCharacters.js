function countAllCharacters(str) {
  let arr = str.split('')
  let result = arr.reduce((ac, v) => ({ ...ac, [v]: (ac[v] || 0) + 1 }), {});

  return result;
}

let output = countAllCharacters('banana');
console.log(output); // --> {b: 1, a: 3, n: 2}