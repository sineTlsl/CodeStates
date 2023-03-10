const balancedBrackets = function (str) {
  let open = ["(", "{", "["];
  let close = [")", "}", "]"];
  let stack = [];
  let result = true;

  if (str.length === 1) return false;

  [...str].forEach((el) => {
    if (open.includes(el)) {
      stack.push(el);
    } else if (close.includes(el)) {
      if (stack.pop() !== open[close.indexOf(el)]) {
        result = false;
      }
    }
  });

  return result;
};
