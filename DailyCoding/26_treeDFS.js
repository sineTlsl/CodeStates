let dfs = function (node) {
  let values = [node.value];

  node.children.forEach((n) => {
    values = values.concat(dfs(n));
  });

  return values;
};

let Node = function (value) {
  this.value = value;
  this.children = [];
};

Node.prototype.addChild = function (child) {
  this.children.push(child);
  return child;
};

let root = new Node(1);
let rootChild1 = root.addChild(new Node(2));
let rootChild2 = root.addChild(new Node(3));
let leaf1 = rootChild1.addChild(new Node(4));
let leaf2 = rootChild1.addChild(new Node(5));
let output = dfs(root);
console.log(output); // --> [1, 2, 4, 5, 3]
