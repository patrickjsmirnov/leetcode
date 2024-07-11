class ListNode {
  constructor(data, next) {
    this.data = data;
    this.next = next ?? null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  append(data) {
    const node = new ListNode(data);

    if (this.head === null) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
  }

  prepend(data) {
    const node = new ListNode(data);

    if (this.head === null) {
      this.head = node;
      this.tail = node;
    } else {
      node.next = this.head;
      this.head = node;
    }
  }

  find(data) {
    let current = this.head;

    while (current !== null && current.data !== data) {
      current = current.next;
    }

    return current;
  }

  delete(data) {
    let current = this.head;
    let prev = null;

    if (current.data === data) {
      this.head = current.next;
      return;
    }

    while (current !== null && current.data !== data) {
      prev = current;
      current = current.next;
    }

    prev.next = current.next;
  }

  arrayToLinkedList(arr) {
    this.head = new ListNode(arr[0]);
    this.tail = new LinkedList(arr[arr.length - 1]);

    let current = this.head;

    for (let i = 1; i <= arr.length - 1; i++) {
      const node = new ListNode(arr[i]);
      current.next = node;
      current = node;
    }
  }

  reverse() {
    let prev = null;
    let current = this.head;

    while (current) {
      let nextNode = current.next;
      current.next = prev;
      prev = current;
      current = nextNode;
    }

    this.head = prev;
  }

  print() {
    const dataArray = [];
    let current = this.head;

    while (current !== null) {
      dataArray.push(current.data);
      current = current.next;
    }

    console.log(dataArray);
  }
}

const linkedList = new LinkedList();

// linkedList.append(1);
// linkedList.append(2);
// linkedList.append(3);
// linkedList.append(4);
// linkedList.prepend(1);
// console.log(linkedList.find(2));
// linkedList.delete(1);

linkedList.arrayToLinkedList([1, 2, 3, 4, 5]);
linkedList.print();
linkedList.reverse();
linkedList.print();
