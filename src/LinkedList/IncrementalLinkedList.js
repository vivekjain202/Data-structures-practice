// eslint-disable next line
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

// eslint-disable next line
class IncrementalLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  add(value) {
    let { head } = this.head || { head: null };
    const newNode = new Node(value);
    // if linkedlist is not initialised yet
    if (!head) {
      this.head = newNode;
      this.tail = newNode;
    } else if (value <= head.value) {
        newNode.next = head;
        this.head = newNode;
      }
      // in case value is greater then tail we need to adjust tail
      else if (this.tail && value >= this.tail.value) {
        this.tail.next = newNode;
        this.tail = newNode;
      } else {
        while (head && head.next && value >= head.next.value) {
          head = head.next;
        }
        newNode.next = head.next;
        head.next = newNode;
      }
  }

  delete(value) {
    let { head } = this.head || { head: null };
    // if linkedlist is not initialised yet
    if (!head) {
      return false;
    }
    // if value is equal to head we need to shift the head
    if (head.value === value) {
      this.head = head.next;
      return true;
    }
    while (head && head.next && head.next.value !== value) {
      head = head.next;
    }
    // in case the next node is tail we need to adjust tail pointer
    if (head.next === this.tail && head.next.value === value) {
      this.tail = head;
      head.next = null;
      return true;
    }
    if (head.next && head.next.value === value) {
      head.next = head.next.next;
      return true;
    }
    return false;
  }

  serach(value) {
    let { head } = this.head || { head: null };
    if (!head) {
      return false;
    }
    while (head && head.value !== value) {
      head = head.next;
    }
    // in case the value is not found the head will be null so we need to return value accordingly
    // this is need as we want to get value true or false only, if we don't it will get value as null
    // eslint-disable next line
    return Boolean(head);
  }

  print() {
    let { head } = this.head || { head: null };
    while (head) {
      // eslint-disable next line
      console.log(head.value);
      head = head.next;
    }
  }
}
