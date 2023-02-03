let output = removeExtremes(["", "", "eept", , "dfdfdsfd", "ssps", "sss", ""]);
console.log(output); // --> ['', 'eept', 'sss']

function removeExtremes(arr) {
  let longStr = "";
  let shortStr = arr[0];
  let result = [];

  arr.forEach((el) => {
    if (shortStr.length >= el.length) {
      shortStr = el;
    }
    if (longStr.length <= el.length) {
      longStr = el;
    }
  });

  arr.forEach((el) => {
    if (
      !el.includes(shortStr) &&
      el === "" &&
      !el.includes(longStr) &&
      el.length <= 20
    ) {
      result.push(el);
    }
  });

  return result;
}
