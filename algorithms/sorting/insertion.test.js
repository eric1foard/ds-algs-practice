const { sort } = require('./insertion');

describe('insertion sort', () => {
    it('should return an empty array when array is empty', () => {
        expect(sort([])).toEqual([]);
    });
    it('should correctly sort array of size 1', () => {
        expect(sort([1])).toEqual([1]);
    });
    it('should correctly sort an already-sorted array', () => {
        expect(sort([1,2,3,4,5])).toEqual([1,2,3,4,5]);
    });
    it('should sort an array in reverse-sorted order (worst case)', () => {
        expect(sort([5,4,3,2,1])).toEqual([1,2,3,4,5]); 
    });
    it('should correctly sort an array in random order', () => {
        expect(sort([4,1,2,5,3])).toEqual([1,2,3,4,5]);
    });
});