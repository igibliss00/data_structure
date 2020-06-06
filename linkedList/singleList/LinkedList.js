import LinkedListNode from "./LinkedListNode.js";
// const LinkedListNode = require("./LinkedListNode.js");

export default class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  prepend(value) {
    const newNode = new LinkedListNode(value, this.head);
    this.head = newNode;

    if (!this.tail) {
      this.tail = newNode;
    }

    this.size += 1;

    return this;
  }

  append(value) {
    const newNode = new LinkedListNode(value);
    this.size += 1;

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;

      return this;
    }

    this.tail.next = newNode;
    this.tail = newNode;
  }

  shift() {
    if (this.head === null) {
      return null;
    }

    const deletedNode = this.head;
    this.head = this.head.next;

    if (this.head === null) {
      this.tail = null;
    }

    this.size--;

    return deletedNode.value;
  }

  pop() {
    if (this.head === null) {
      return null;
    }

    if (this.head === this.tail) {
      return this.shift();
    }

    let current = this.head;
    let previous = null;
    while (current !== this.tail) {
      previous = current;
      current = current.next;
    }

    previous.next = null;
    this.tail = previous;
    this.size--;
    return current.data;
  }

  peekFirst() {
    if (this.head === null) {
      return null;
    }

    return this.head.value;
  }

  peekLast1() {
    if (this.head === null) {
      return null;
    }

    let temp = this.head;
    while (temp.next != null) {
      temp = temp.next;
    }

    return temp.value;
  }

  peekLast2() {
    if (this.tail === null) {
      return null;
    }

    return this.tail.value;
  }

  peekNth(nth) {
    if (nth >= this.size) {
      return null;
    }

    let iteration = 0;
    let current = this.head;
    while (iteration !== nth) {
      current = current.next;
      iteration++;
    }

    return current.value;
  }
}
