class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    const newNode = new Node(val);
    this.length++;
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
      return this;
    }
    this.tail.next = newNode;
    this.tail = newNode;
    return this;
  }
}

const first = new SinglyLinkedList();
first.push(1).push(2).push(3).push(4);

console.log(first.head.next);
