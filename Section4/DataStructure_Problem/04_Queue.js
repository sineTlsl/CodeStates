const boxes = [5, 1, 4, 6];
const output = paveBox(boxes);
console.log(output); // 3

function paveBox(boxes) {
  let queue = [...boxes];
  let result = [];
  let idx = 1;
  let front = queue[0];

  while (queue.length > 0) {
    if (front >= queue[idx]) {
      idx++;
      if (queue.length === idx) {
        result = [...result, idx];
      }
    } else {
      result = [...result, idx];
      idx = 1;
      queue.splice(0, idx);
      front = queue[0];
    }
  }

  return Math.max(...result);
}
