const swapMin = (pos, arr) => {
    let min = arr[pos], posMin = pos;
    for (let i=pos; i<arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i], posMin = i;
        }
    }
    let temp = arr[pos];
    arr[pos] = min, arr[posMin] = temp;
    return arr;
};

const selectionSort = (arr) => {
    if (arr.length > 1) {
        let sortedPos = 0;
        while (sortedPos < arr.length) {
            swapMin(sortedPos, arr);
            sortedPos++;
        }
    }
    return arr;
};

module.exports = {
    sort: selectionSort
};