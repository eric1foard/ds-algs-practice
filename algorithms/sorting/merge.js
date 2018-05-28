const merge = (arr1, arr2) => {
    let mergedArr = [], i1 = 0, i2 = 0;
    while (i1 < arr1.length || i2 < arr2.length) {
        if (i1 >= arr1.length) {
            mergedArr.push(arr2[i2]);
            i2++; 
        } else if (i2 >= arr2.length) {
            mergedArr.push(arr1[i1]); 
            i1++;
        }
        else if (arr1[i1] < arr2[i2]) {
            mergedArr.push(arr1[i1]);
            i1++;
        } else {
            mergedArr.push(arr2[i2]);
            i2++;
        }
    }
    return mergedArr;
};

const mergeSort = (arr) => {
    let left, right;
    if (arr.length <= 1) return arr;

    const mid = Math.floor(arr.length/2);
    left = mergeSort(arr.slice(0, mid));
    right = mergeSort(arr.slice(mid, arr.length));
    return merge(left, right);
};

module.exports = {
    sort: mergeSort
};