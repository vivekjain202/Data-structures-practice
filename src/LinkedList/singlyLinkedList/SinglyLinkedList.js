// LinkedList real life usecase examples https://www.geeksforgeeks.org/applications-of-linked-list-data-structure/
const Node = require("../../Node/index.js");

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  add(value) {
    const { head } = this || { head: null };
    const newNode = new Node(value);
    if (!head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
  }

  prepand(value) {
    const { head } = this || { head: null };
    const node = new Node(value);
    node.next = head;
    this.head = node;
    if (!this.tail) {
      this.tail = node;
    }
  }

  search(value) {
    let { head } = this || { head: null };
    while (head) {
      if (head.value === value) {
        return true;
      }
      head = head.next;
    }
    return false;
  }

  remove(value) {
    if (!this.head) {
      return false;
    }
    let { head } = this || { head: null };
    if (head.value === value) {
      this.head = head.next;
      return true;
    }

    while (head) {
      if (head.next && head.next.value === value) {
        break;
      }
      head = head.next;
    }
    if (head) {
      if (head.next === this.tail) {
        this.tail = head;
        head.next = null;
      } else {
        head.next = head.next.next;
      }
    }
    return true;
  }

  print() {
    let { head } = this || { head: null };
    while (head) {
      // eslint-disable-next-line
      console.log(head.value);
      head = head.next;
    }
  }

  printReverse(head = this.head) {
    if (head) {
      this.printReverse(head.next);
    }
    // needed in order to cover edge case when head is null
    if (head) {
      // eslint-disable-next-line
      console.log(head.value);
    }
  }
}

module.exports.LinkedList = LinkedList;
