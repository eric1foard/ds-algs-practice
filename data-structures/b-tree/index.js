class Node {
    constructor(degree) {
        this.values = new Array(2 * degree - 1);
        this.children = new Array(2 * degree);
    }
}

class BTree {
    constructor(degree) {
        this.degree = degree;
        this.root = null;
    }
}

module.exports = {
    Node,
    BTree
}