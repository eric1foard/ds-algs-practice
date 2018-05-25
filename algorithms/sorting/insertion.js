const findPosForElt = (pos, arr) => {
    let eltToInsert = arr[pos];
    for (let i=0; i<pos; i++) {
        if (arr[i] > eltToInsert) {
            return i;
        }
    }
    return pos;
};

const swapIntoPlace = (first, last, arr) => {
    if (first === last) return arr;
    let eltToInsert = arr[last];
    for (let i=last; i>first; i--) {
        arr[i] = arr[i-1];
    }
    arr[first] = eltToInsert;
    return arr;
};

[1,3,4,2]

const insertSorted = (pos, arr) => {
    const targePos = findPosForElt(pos, arr);
    swapIntoPlace(targePos, pos, arr);
};

const insertionSort = arr => {
    if (arr.length > 1) {
        let sortedPos = 1;
        while (sortedPos < arr.length) {
            insertSorted(sortedPos, arr);
            sortedPos++;
        }
    }
    return arr;
};

module.exports = {
    sort: insertionSort
};