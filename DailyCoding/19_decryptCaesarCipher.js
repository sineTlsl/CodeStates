let output = decryptCaesarCipher("khoor", 3);
console.log(output); // --> hello

function decryptCaesarCipher(str, secret) {
  let alphabet = "abcdefghijklmnopqrstuvwxyz";
  let result = "";

  if (str === "") return "";
  [...str].forEach((el) => {
    if (el === " ") {
      result += " ";
    } else {
      let idx = alphabet.indexOf(el);

      if (idx - secret < 0) {
        result += alphabet[alphabet.length - Math.abs(idx - secret)];
      } else {
        result += alphabet[idx - secret];
      }
    }
  });
  return result;
}
