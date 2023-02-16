let output = firstReverse("codestates");
console.log(output); // "setatsedoc"

// 문자열을 입력받아 순서가 뒤집힌 문자열을 리턴해야 합니다.
function firstReverse(str) {
  return str.split("").reverse().join("");
}
