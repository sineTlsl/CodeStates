let output1 = letterCapitalize('hello world');
console.log(output1); // "Hello World"

function letterCapitalize(str) {
  return str.replace(/\b[a-z]/g, char => char.toUpperCase());
}
