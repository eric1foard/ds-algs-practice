class Node {
    constructor(degree) {
        this.values = [];
        this.children = [];
        this.degree = degree;
        this.isRoot = false;
    }

    insertChild(child, pos) {
        this.children = this.children.slice(0, pos).concat(child).concat(this.children.slice(pos, this.children.length));
    }
    
    insert(value, child) {
        this.values.push(value);
        this.values.sort((a,b) => a < b ? -1 : 1);
        if (child) {
            this.insertChild(child, this.values.indexOf(value));
        }
        // NOTE: could sort faster by inserting elt into sorted pos rather than full sort of arr
    }

    hasChildren() {
        return Boolean(this.children.length);
    }

    hasSpace() {
        return this.values.length < this.degree*2-1;
    }
}

const _split = (value, node, parent) => {
    const left = new Node(node.degree),
    right = new Node(node.degree);

    parent.insert(value);

    const leftVals = node.values.filter(e => e < value),
    rightVals = node.values.filter(e => e > value),
    leftChildren = node.children.slice(0, node.children.indexOf(leftVals[leftVals.length-1])),
    rightChildren = node.children.slice(node.children.indexOf(rightVals[0]), node.children.length);

    left.values = leftVals;
    left.children = leftChildren;
    right.values = rightVals;
    right.children = rightChildren;

    parent.children[parent.values.indexOf(value)] = left
    //parent.insertChild(left, parent.values.indexOf(value));
    parent.insertChild(right, parent.values.indexOf(value)+1);

    return parent;
};

// INSERT CASES:
// tree is empty -- create root and insert value
// root is leaf and not full -- insert into root
// root not leaf, targetNode not full -- insert into target node
// root not leaf, target node full -- split target node and ancestors as needed
const _insert = (value, node, parent, bt) => {
    // if this node is a leaf and has space, insert val
    //else if not leaf, go to child node and recurse
    const isLeaf = !node.hasChildren(),
        isFull = !node.hasSpace();
    if (isLeaf && !isFull) {
        node.insert(value);
    } else if (isFull) { // split node, it's full
        if (node.isRoot) {
            const newRoot = new Node(bt.degree);
            newRoot.isRoot = true;
            bt.root = _split(value, node, newRoot);
        } else {
            _split(value, node, parent);
        }
    } else { // not is not full and has children
        let childPos = 0;
        while (childPos <= node.values.length && node.values[childPos] < value) {
            childPos++;
        }
        _insert(value, node.children[childPos], node, bt);
    }
};

class BTree {
    constructor(degree) {
        this.degree = degree;
        this.root = null;
    }
    insert(value) {
        if (!this.root) { // tree is empty -- create root and insert value
            this.root = new Node(this.degree);
            this.root.insert(value);
            this.root.isRoot = true;
        } else {
            _insert(value, this.root, null, this);
        }
    }
}

module.exports = {
    Node,
    BTree
}