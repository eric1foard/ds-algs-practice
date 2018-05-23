const { Node, BST } = require('../bst');

class AVLNode extends Node {
    constructor(value) {
        super(value);
        this.height = 1;
    }
}

const _balance = (node) => {
    const bal = _getHeight(node.left) - _getHeight(node.right);
};

const _getAncestors = (value, arr) => {
    if (value === node.value) {
        return [node].concat(arr);
    };
    if (value < node.value) {
        if (node.left) {
            return _getAncestors(value, node.left, [node].concat(arr));
        } else {
            return [];
        }
    } else {
        if (node.right) {
            return _getAncestors(value, node.right, [node].concat(arr));
        } else {
            return [];
        }
    }
};

const _getHeight = (node) => {
    return node ? node.height : 0;
};

const _updateHeight = (node) => {
    node.height = 1 + Math.max(_getHeight(node.left), _getHeight(node.right));
};

const _getFirstUnbalanced = (nodeArr) => {
    return nodeArr.find(node => Math.abs(_getHeight(node.left) - _getHeight(node.right) >= 2));
};

class AVL extends BST {
    constructor() {
        super(AVLNode);
    }

    add(value) {
        super.add(value);
        const ancestors = _getAncestors(value);
        ancestors.forEach(_updateHeight);
        const rootUnbalanced = _getFirstUnbalanced(ancestors);
        _balance(rootUnbalanced);
    }

    remove(value) {
        super.remove(value);
        _balance(this.root);
    }

}

module.exports = {
    AVL,
    Node
};