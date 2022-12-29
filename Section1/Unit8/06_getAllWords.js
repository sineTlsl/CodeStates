const str = 'Radagast the Brown';
console.log(getAllWords(str));

function getAllWords(str) {
  return str.length >= 1 ? str.split(" ") : new Array();
}