let output = insertDash("454793");
console.log(output); // --> 4547-9-3

function insertDash(str) {
  let cnt = 0;
  let result = "";

  for (let i = 0; i < str.length; i++) {
    if (str[i] % 2 === 1 && str[i] !== 0) {
      cnt++;
      if (cnt >= 2) {
        result += "-";
      }
    } else {
      cnt = 0;
    }
    result += str[i];
  }

  return result;
}
