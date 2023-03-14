const result4 = isValid("[]{)()");
console.log(result4); // false

const isValid = (str) => {
  const open = ["(", "[", "{"];
  const close = [")", "]", "}"];
  let stack = [];
  let result = true;

  if (!str.length) return false;

  [...str].forEach((el) => {
    if (open.includes(el)) {
      stack.push(el);
    } else if (close.includes(el)) {
      if (stack[stack.length - 1] === open[close.indexOf(el)]) {
        stack.pop();
      } else {
        result = false;
      }
    }
  });

  return stack.length || !result ? false : true;
};
