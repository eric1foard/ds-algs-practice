class Node {
    constructor(value) {
        this.value = value;
        this.left = this.right = null;
    }
    
    isEmpty() {
        return Boolean(!(this.left || this.right));
    }
}

const _add = (value, node, N) => {
    if (value < node.value) {
        if (node.left) {
            _add(value, node.left, N);
        } else {
            node.left = new N(value);
        }
    } else if (value > node.value) {
        if (node.right) {
            _add(value, node.right, N);
        } else {
            node.right = new N(value);
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
    while (currNode.right) {
        currNode = currNode.right;
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
    constructor(n) {
        this.root = null;
        this.Node = n || Node;
    }

    add(value) {
        if (this.isEmpty()) {
            this.root = new this.Node(value);
        } else {
            _add(value, this.root, this.Node);
        }
    }

    contains(value) {
        if (this.isEmpty()) {
            return false;
        }
        return _contains(value, this.root);
    }

    remove(value) {
        if (this.isEmpty()) {
            return;
        }
        if (this.root.value === value) {
            if (!this.root.left) {
                this.root = this.root.right;
            } else {
                this.root.value = _findMax(this.root.left).value;
                return _remove(this.root.value, this.root.left, this.root);
            }
        }
        else {
            return _remove(value, this.root, null);
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