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
    if (!this.head) {
      this.head = new Node(val);
      this.tail = this.head;
      this.length++;
      return this;
    }
    this.tail.next = new Node(val);
    this.length++;
    return this;
  }
}

const first = new SinglyLinkedList();
first.push(1).push(2);

console.log(first);
