let output = ABCheck("lane Borrowed");
console.log(output); // --> true

function ABCheck(str) {
  let isBoolean = false;

  str = str.toLowerCase();
  for (let i = 0; i < str.length; i++) {
    if (!isBoolean) {
      if (
        (str[i] === "a" && str[i + 4] === "b") ||
        (str[i + 4] === "a" && str[i] === "b")
      ) {
        isBoolean = true;
      }
    }
  }

  return isBoolean;
}
