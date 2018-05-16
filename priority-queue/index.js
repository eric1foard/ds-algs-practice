class Node {
    constructor(value, priority) {
        this.value = value;
        this.priority = priority;
        this.next = null;
    }
}

class PriorityQueue {
    constructor() {
        this.head = null;
    }

    enqueue(value, priority) {
        const node = new Node(value, priority);
        if (!this.head) {
            this.head = node;
        } else if (node.priority < this.head.priority) {
            let oldHead = this.head;
            this.head = node;
            this.head.next = oldHead;
        } else {
            let temp = this.head;
            while(temp.next) {
                if (node.value < temp.next.value) {
                    break;
                }
                temp = temp.next;
            }
            node.next = temp.next;
            temp.next = node;
        }
    }

    dequeue() {
        if (!this.head) {
            return;
        }
        const node = this.head;
        this.head = this.head.next;
        return node;
    }
}

module.exports = {
    Node,
    PriorityQueue
}