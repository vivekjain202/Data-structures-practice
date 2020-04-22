// LinkedList real life usecase examples https://www.geeksforgeeks.org/applications-of-linked-list-data-structure/

export class Node {
    constructor(value) {
        this.value = value
        this.next = null
    }
}

export class LinkedList {
    constructor() {
        this.head = null
        this.tail = null
    }

    add(value) {
        let head = this.head
        let newNode = new Node(value)
        if (!head) {
            this.head = newNode
            this.tail = newNode
        } else {
            this.tail.next = newNode
            this.tail = newNode
        }
    }

    prepand(value) {
        let head = this.head
        let node = new Node(value)
        node.next = head
        this.head = node
        if (!this.tail) {
            this.tail = node
        }
    }

    search(value) {
        let head = this.head
        while (head) {
            if (head.value === value) {
                return true
            }
            head = head.next
        }
        return false
    }

    remove(value){
        if(!this.head){
            return false
        }
        let head = this.head
        if(head.value === value){
            this.head = head.next
            return;
        }

        while(head){
            if(head.next && head.next.value === value){
                break;
            }
            head = head.next
        }
        if(head){
            if(head.next === this.tail){
                this.tail = head
                head.next = null
            } else {
                head.next = head.next.next
            }
        }
    }

    print() {
        let head = this.head
        while (head) {
            console.log(head.value)
            head = head.next
        }
    }

    printReverse(head=this.head){
        if(head){
            this.printReverse(head.next)
        }
        // needed in order to cover edge case when head is null
        if(head){
            console.log(head.value)
        }
    }
}