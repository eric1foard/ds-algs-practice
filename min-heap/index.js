const _parent = pos => Math.ceil(pos/2)-1;

const _leftChild = pos => 2 * pos + 1;

const _rightChild = pos => 2 * pos + 2;

const _minChild = (arr, left, right) => {
    if (arr[left] === undefined && arr[right] === undefined) {
        return Infinity;
    }
    return arr[left] && arr[right] ?
    Math.min(arr[left], arr[right]) :
    arr[left] || arr[right];
};

const _float = (arr, pos) => {
    let temp, parentPos = _parent(pos);
    
    if (pos === 0 || arr[pos] >= arr[parentPos]) {
        return;
    }
    temp = arr[parentPos];
    arr[parentPos] = arr[pos];
    arr[pos] = temp;
    return _float(arr, parentPos);
};

const _heapify = (arr, pos) => {
    const left = _leftChild(pos),
    right = _rightChild(pos),
    minChild = _minChild(arr, left, right);

    if (arr[pos] === undefined || arr[pos] <= minChild) {
        return;
    }
    const swapPos = minChild === arr[left] ? left : right;
    const temp = arr[pos];
    arr[pos] = minChild;
    arr[swapPos] = temp;
    return _heapify(arr, swapPos);
};

class MinHeap {
    constructor() {
        this.array = [];
    }

    isEmpty() {
        return this.array.length === 0;
    }

    insert(value) {
        if (this.isEmpty()) {
            this.array[0] = value;
        } else {
            this.array.push(value);
            _float(this.array, this.array.length-1);
        }
    }

    extract() {
        if (this.isEmpty()) {
            return null;
        }
        let result = this.array[0];
        this.array[0] = this.array[this.array.length-1];
        this.array = this.array.slice(0, this.array.length-1);
        _heapify(this.array, 0);
        return result;
    }
}

module.exports = {
    MinHeap
}