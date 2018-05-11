class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Queue {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    enqueue(value) {
        let node = new Node(value);
        if (this.isEmpty()) {
            this.head = this.tail = node;
        } else {
            this.tail.next = this.tail = node;
        }
    }

    dequeue() {
        if (this.isEmpty()) {
            return null;
        }
        let { value } = this.head;
        if (this.head === this.tail) {
            this.tail = null;
        }
        this.head = this.head.next;
        return value;
    }

    isEmpty() {
        return this.head === null;
    }
}

module.exports = {
    Queue,
    Node
};
