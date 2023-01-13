class Counter {
  constructor() {
    this.value = 0;
  }
  increase() {
    this.value++;
  }
  decrease() {
    this.value--;
  }
  getValue() {
    return this.value;
  }
}

let counter1 = new Counter();
counter1.increase();
console.log(counter1.getValue());