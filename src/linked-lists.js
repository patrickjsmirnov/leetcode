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

  deleteDuplicates() {
    if (!this.head) return this.head;

    let current = this.head;

    while (current && current.next) {
      if (current.data === current.next.data) {
        current.next = current.next.next;
      } else {
        current = current.next;
      }
    }
  }

  isPalindrome() {
    const data = [];
    let current = this.head;
    let result = true;

    while (current) {
      data.push(current.data);
      current = current.next;
    }

    let left = 0;
    let right = data.length - 1;

    while (left < right && result) {
      if (data[left] !== data[right]) {
        result = false;
      } else {
        left++;
        right--;
      }
    }

    console.log(result);
  }

  isPalindromeChatGPT() {
    if (!this.head || !this.head.next) return true;

    // Step 1: Find the middle of the linked list
    let slow = head;
    let fast = head;
    while (fast && fast.next) {
      slow = slow.next;
      fast = fast.next.next;
    }

    // Step 2: Reverse the second half of the linked list
    let prev = null;
    let curr = slow;
    while (curr) {
      let nextTemp = curr.next;
      curr.next = prev;
      prev = curr;
      curr = nextTemp;
    }

    // Step 3: Compare the first and second halves
    let firstHalf = head;
    let secondHalf = prev; // `prev` is now the head of the reversed second half
    while (secondHalf) {
      if (firstHalf.val !== secondHalf.val) {
        return false;
      }
      firstHalf = firstHalf.next;
      secondHalf = secondHalf.next;
    }

    return true;
  }

  middleNode() {
    let current = this.head;
    let total = 1;
    let count = 1;

    while (current && current.next) {
      current = current.next;
      total++;
    }

    const mid = Math.floor(total / 2) + 1;

    current = this.head;
    while (count < mid) {
      current = current.next;
      count++;
    }

    this.head = current;
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

// linkedList.arrayToLinkedList([1, 1, 2, 2, 3]);
// linkedList.arrayToLinkedList([1, 2, 2]);
// linkedList.arrayToLinkedList([1, 1]);
// linkedList.arrayToLinkedList([1, 2, 2, 1]); // true
linkedList.arrayToLinkedList([1, 2]); // false
// linkedList.arrayToLinkedList([1, 1, 2, 3, 3]);
linkedList.print();
linkedList.isPalindrome();
// linkedList.print();
