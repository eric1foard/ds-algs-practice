const { Node, BST } = require('../bst');

class AVLNode extends Node {
    constructor(value) {
        super(value);
        this.height = 1;
    }
}

const _rotateLeft = node => {
    const left = node.left;
    const right = node.right;

    right.left = node;
    node.right = left;

    _updateHeight(node);
    _updateHeight(right);
};

const _rotateRight = node => {
    const left = node.left;
    const right = node.right;

    left.right = node;
    node.left = right;

    _updateHeight(node);
    _updateHeight(left);
};

const _balance = (node, val) => {
    const bal = _getHeight(node.left) - _getHeight(node.right);

    // left left case
    if (bal > 0 && val < node.left.value) {
        return _rotateRight(node);
    }
    // right right case
    if (bal < 0 && value > node.right.value) {
        return _rotateLeft(node);
    }
    // left right case
    if (bal > 0 && val > node.left.value) {
        // left rotate node.left
        _rotateLeft(node.left);
        // rotate right
        return _rotateRight(node);
    }
    // right left case
    if (bal < 0 && val < node.right.value) {
        // right rotate right child
        _rotateRight(node.right);
        // left rotate
        return _rotateLeft(node);
    }
};

const _getAncestors = (value, node, arr) => {
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
    return nodeArr.find(node => Math.abs(_getHeight(node.left) - _getHeight(node.right)) >= 2);
};

class AVL extends BST {
    constructor() {
        super(AVLNode);
    }

    add(value) {
        super.add(value);
        const ancestors = _getAncestors(value, this.root, []);
        ancestors.forEach(_updateHeight);
        const unbalancedNode = _getFirstUnbalanced(ancestors);
        if (unbalancedNode) {
            _balance(unbalancedNode, value);
        }
    }

    remove(value) {
        super.remove(value);
        // TODO
        _balance(this.root);
    }

}

module.exports = {
    AVL,
    Node
};