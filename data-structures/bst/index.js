class Node {
    constructor(value) {
        this.value = value;
        this.left = this.right = null;
    }
    
    isEmpty() {
        return Boolean(!(this.left || this.right));
    }
}

const _add = (value, node) => {
    if (value < node.value) {
        if (node.left) {
            _add(value, node.left);
        } else {
            node.left = new Node(value);
        }
    } else if (value > node.value) {
        if (node.right) {
            _add(value, node.right);
        } else {
            node.right = new Node(value);
        }
    }
};

const _contains = (value, node) => {
    if (value === node.value) return true;
    if (value < node.value) {
        if (node.left) {
            return _contains(value, node.left);
        } else {
            return false;
        }
    } else {
        if (node.right) {
            return _contains(value, node.right);
        } else {
            return false;
        }
    }
};

const _findMax = node => {
    let currNode = node;
    while (currNode) {
        currNode = node.right;
    }
    return currNode;
};

const _remove = (value, node, parent) => {
    if (!node) {
        return;
    }
    if (value < node.value) {
        return _remove(value, node.left, node);
    }
    if (value > node.value) {
        return _remove(value, node.right, node);
    }
    let dir = parent.left && parent.left.value === value ? 'left' : 'right';
    if (node.left && node.right) {
            let maxNode = _findMax(node.left);
            node.value = maxNode.value;
            return _remove(maxNode.value, node.left, node);
    } else if (node.left || node.right) {
        parent[dir] = node.left || node.right;
    } else {
        parent[dir] = null;
    }
};

class BST {
    constructor() {
        this.root = null;
    }

    add(value) {
        if (this.isEmpty()) {
            this.root = new Node(value);
        } else {
            _add(value, this.root);
        }
    }

    contains(value) {
        if (this.isEmpty()) {
            return false;
        } else {
            return _contains(value, this.root);
        }
    }

    remove(value) {
        if (this.isEmpty()) {
            return;
        } else {
            _remove(value, this.root, null);
        }
    }

    isEmpty() {
        return Boolean(!this.root);
    }
}

module.exports = {
    Node,
    BST
}