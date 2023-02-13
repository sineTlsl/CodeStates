let output = firstCharacter("hello world");
console.log(output); // --> "hw"

// 문자열을 입력받아 문자열을 구성하는 각 단어의 첫 글자로 이루어진 문자열을 리턴해야 합니다.
function firstCharacter(str) {
  if (str === "") return "";

  let words = str.split(" ");
  let result = "";
  for (let el of words) {
    result += el[0];
  }
  return result;
}
