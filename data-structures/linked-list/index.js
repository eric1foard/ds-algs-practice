class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    add(value) {
        if (this.isEmpty()) {
         this.head = new Node(value);
         this.tail = this.head;
        } else {
            this.tail.next = new Node(value);
            this.tail = this.tail.next;
        }
    }

    remove(value) {
        if (this.isEmpty()) {
            return;
        }
        if (this.head.value === value) {
            this.head = this.head.next;
        } else {
            let temp = this.head;
            while (temp.next) {
                if (temp.next.value === value) {
                    temp.next = temp.next.next;
                    if (temp.next === null) {
                        this.tail = temp;
                    }
                    return;
                }
                temp = temp.next;
            }
        }
    }

    contains(target) {
        if (this.isEmpty()) {
            return false;
        }
        let temp = this.head;
        while(temp) {
            if (temp.value === target) {
                return true;
            }
            temp = temp.next;
        }
        return false;
    }

    isEmpty() {
        return Boolean(!this.head);
    }
}

module.exports = {
    Node,
    LinkedList
}