const swap = function (idx1, idx2, arr) {
  [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
};

let bubbleSort = function (arr) {
  let N = arr.length;

  for (let i = 0; i < N; i++) {
    let swaps = 0;

    for (let j = 0; j < N - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        swaps++;
        swap(j, j + 1, arr);
      }
    }

    if (swaps === 0) {
      break;
    }
  }

  return arr;
};

let output = bubbleSort([2, 1, 3]);
console.log(output); // --> [1, 2, 3]
