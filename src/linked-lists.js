class ListNode {
  constructor(data, next) {
    this.data = data ?? 0;
    this.next = next ?? null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  getHead() {
    return this.head;
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
    this.tail = new ListNode(arr[arr.length - 1]);

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

  removeElementsWithValue(value) {
    let dummy = new ListNode(0);
    dummy.next = this.head;

    let current = this.head;
    let prev = dummy;

    while (current !== null) {
      if (current.data === value) {
        prev.next = current.next;
      } else {
        prev = current;
      }
      current = current.next;
    }

    return dummy.next;
  }

  static mergeTwoLists(head1, head2) {
    let current1 = head1;
    let current2 = head2;
    let head;
    let current;

    if (!head1) return head2;
    if (!head2) return head1;

    if (head1.data <= head2.data) {
      current = head1;
      current1 = head1.next;
      head = head1;
    } else {
      current = head2;
      current2 = head2.next;
      head = head2;
    }

    while (current) {
      if (!current1) {
        current.next = current2;
        return head;
      }

      if (!current2) {
        current.next = current1;
        return head;
      }

      if (current1.data < current2.data) {
        current.next = current1;
        current1 = current1.next;
      } else {
        current.next = current2;
        current2 = current2.next;
      }

      current = current.next;
    }

    return head;
  }

  static print(head) {
    const dataArray = [];
    let current = head;

    while (current !== null) {
      dataArray.push(current.data);
      current = current.next;
    }

    console.log(dataArray);
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

const linkedList1 = new LinkedList();
const linkedList2 = new LinkedList();

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
linkedList1.arrayToLinkedList([1, 2, 6, 3, 4, 5, 6]); // false
linkedList1.print();
linkedList1.removeElementsWithValue(6);
// linkedList2.arrayToLinkedList([2, 3]); // false
// linkedList.arrayToLinkedList([1, 1, 2, 3, 3]);

// const head1 = linkedList1.getHead();
// const head2 = linkedList2.getHead();

// LinkedList.print(LinkedList.mergeTwoLists(head1, head2));

linkedList1.print();
