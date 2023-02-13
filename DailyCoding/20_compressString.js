let output = compressString("EQTWVOQQQVDVRC");
console.log(output); // --> 3wggoppo4p

// 빈 문자열을 입력받은 경우, 빈 문자열을 리턴해야 한다.
// 3개 이상 연속되는 문자열을 'aaa' 입력받으면 => '3a' 출력해야 한다.
function compressString(str) {
  let newStr = str[0];
  let cnt = 1;
  let result = "";

  str = str + " ";
  for (let i = 1; i < str.length; i++) {
    if (newStr === str[i]) {
      cnt++;
    } else {
      cnt >= 3 ? (result += cnt + newStr) : (result += newStr.repeat(cnt));
      newStr = str[i];
      cnt = 1;
    }
  }

  return result;
}
