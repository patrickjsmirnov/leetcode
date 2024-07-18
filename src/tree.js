class TreeNode {
  constructor(data, left, right) {
    this.left = left ?? null;
    this.right = right ?? null;
    this.data = data ?? null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  append(data) {
    const node = new TreeNode(data);

    if (!this.root) {
      this.root = node;
    } else {
      this.insert(this.root, node);
    }
  }

  insert(root, node) {
    if (node.data < root.data) {
      if (root.left === null) {
        root.left = node;
      } else {
        this.insert(root.left, node);
      }
    }
    if (node.data > root.data) {
      if (root.right === null) {
        root.right = node;
      } else {
        this.insert(root.right, node);
      }
    }
  }

  find(data, node = this.root) {
    if (node === null) {
      return null;
    } else if (node.data === data) {
      return node;
    } else if (data < node.data) {
      return this.find(data, node.left);
    } else {
      return this.find(data, node.right);
    }
  }

  print() {
    console.log(this.root);
  }
}

const bst = new BinarySearchTree();

bst.append(8);
bst.append(3);
bst.append(10);
bst.append(1);
bst.append(14);
bst.append(6);
bst.print();
console.log(bst.find(6));
