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

    // the list starts from index 1
    let iteration = 1;
    let current = this.head;
    while (iteration !== nth) {
      current = current.next;
      iteration++;
    }

    return current.value;
  }

  /**
   *
   * @dev The function takes into account of the fact that there could be more than one node with the value
   * we're looking to delete. Therefore, it'll delete the head, mid-nodes, and the tail if the value matches
   */
  delete(value) {
    if (!this.head) {
      return null;
    }

    let deletedNode = null;

    // If the head must be deleted then make next node that is different
    // from the head to be a new head.
    while (this.head && this.head.value === value) {
      deletedNode = this.head;
      this.head = this.head.next;
    }

    let currentNode = this.head;

    if (currentNode !== null) {
      // Loop until you reach the end of the list. Finding the node with the value doesn't break the loop
      while (currentNode.next) {
        // Once you find the node before the actual node you want to delete
        if (currentNode.next.value === value) {
          // Capture the node you want to delete to be returned later
          deletedNode = currentNode.next;
          // Overwrite the node you want to delete with the node followed by it
          currentNode.next = currentNode.next.next;
        } else {
          // Iterate through the list if the node with the value you're looking for is not found
          currentNode = currentNode.next;
        }
      }
    }

    // Check if tail must be deleted
    if (this.tail.value === value) {
      this.tail = currentNode;
    }

    return deletedNode;
  }

  // finds the first node that matches the value and returns
  find({ value = undefined, callback = undefined }) {
    if (!this.head) {
      return null;
    }

    let currentNode = this.head;

    // loop until reaching the end of the linked list. Doesn't need to be currentNode.next like the delete() function
    // since no links have to be re-established
    while (currentNode) {
      // If callback is specified, then try to find node by callback
      if (callback && callback(currentNode.value)) {
        return currentNode;
      }

      // If value is specified, then try to compare by value
      if (value !== undefined && currentNode.value === value) {
        return currentNode;
      }

      currentNode = currentNode.next;
    }

    return null;
  }
}
