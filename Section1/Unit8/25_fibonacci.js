const arr = [0, 1, 0, 1, 2, 3, 4, 5, 6, 7, 8];
console.log(fibonacci(arr));

function fibonacci(num) {
  let arr = [];

  for (let i=0; i<=num; i++) {
    if (i<2) {
      arr[i] = i;
    } else {
      arr[i] = arr[i-2] + arr[i-1];      
    }
  }
  return arr;
}