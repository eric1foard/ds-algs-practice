class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Stack {
    constructor() {
        this.head = null;
    }

    push(value) {
        let node = new Node(value);
        let temp = this.head;
        this.head = node;
        this.head.next = temp;
    }

    pop() {
        if (!this.head) return null;
        const value = this.head.value;
        this.head = this.head.next;
        return value;
    }
}

module.exports = {
    Node,
    Stack
};