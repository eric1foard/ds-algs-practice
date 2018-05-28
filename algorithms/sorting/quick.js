const swap = (arr, pos1, pos2) => {
    const temp = arr[pos1];
    arr[pos1] = arr[pos2];
    arr[pos2] = temp;
};

const partition = (arr, low, high) => {
    const pivot = arr[high];
    let lowPos = low, highPos = high-1;
    while (lowPos <= highPos) {
        let swapLow = arr[lowPos] > pivot, swapHigh = arr[highPos] < pivot;
        if (swapLow && swapHigh) {
            swap(arr, lowPos, highPos);
            lowPos++; highPos--;
        } else if (swapLow) {
            highPos--;
        } else if (swapHigh) {
            lowPos++;
        } else {
            lowPos++; highPos--;
        }
    }
    swap(arr, high, lowPos);
    return lowPos;
};

const qs = (arr, left, right) => {
    if (left >= right) {
        return arr;
    }
    const index = partition(arr, left, right);
    qs(arr, left, index-1);
    qs(arr, index+1, right);
    console.log('final arr', arr);
    return arr;
};

const quickSort = (arr) => {
    return qs(arr, 0, arr.length-1);
};

module.exports = {
    sort: quickSort
};