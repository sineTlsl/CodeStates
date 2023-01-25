let output = convertDoubleSpaceToSingle("string  with  double  spaces");
console.log(output); // --> "string with double spaces"

function convertDoubleSpaceToSingle(str) {
  let strTrim = str.trim();

  strTrim = strTrim.replace(/\s{2,}/gi, " ");
  return strTrim;
}
