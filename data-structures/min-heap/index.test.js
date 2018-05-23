const { MinHeap } = require('./index');

test('MinHeap should be defined', () => {
    expect(MinHeap).toBeDefined();
});

let mh;
beforeEach(() => {
    mh = new MinHeap();
});

describe('when instantiating MinHeap', () => {
    it('should have the expected properties', () => {
        expect(mh.array).toEqual([]);
    });
    it('should have the expected methods', () => {
        expect(typeof mh.insert).toEqual('function');
        expect(typeof mh.extract).toEqual('function');
    });
});

describe('when checking if heap is empty', () => {
    it('should return true if heap is empty', () => {
        expect(mh.isEmpty()).toEqual(true);
    });
    it('should return false if heap is non-empty', () => {
        mh.array = [1,2,3];
        expect(mh.isEmpty()).toEqual(false);
    });
});

describe('when inserting elements into the MinHeap', () => {
    it('should correctly insert element into an empty heap', () => {
        mh.insert(1);
        expect(mh.array).toEqual([1]);
    });
    it('should correctly insert element that will be a leaf', () => {
        mh.array = [1];
        mh.insert(2);
        expect(mh.array).toEqual([1,2]);
    });
    it('should correctly insert element that will be an internal node', () => {
        mh.array = [10,20,30,40,50,60,70];
        mh.insert(15);
        expect(mh.array).toEqual([10,15,30,20,50,60,70,40])
    });
    it('should correctly insert element that will be root', () => {
        mh.array = [2];
        mh.insert(1);
        expect(mh.array).toEqual([1,2]);
    });

});

describe('when extracting elements from the MinHeap', () => {
    it('should return null when heap is empty', () => {
        expect(mh.extract()).toBeNull();
    });
    it('should return root val when heap is size 1', () => {
        mh.insert(1);
        expect(mh.extract()).toEqual(1);
    });
    it('should set internal heap array to empty when last element removed', () => {
        mh.insert(1);
        mh.extract();
        expect(mh.array).toEqual([]);
    });
    it('should return the minimum element of the heap', () => {
        [20,10,30,50,5,3,7].forEach(n => mh.insert(n));
        expect(mh.extract()).toEqual(3);
    });
    it('should maintain heap property when element is removed', () => {
        [20,10,30,50,5,3,7].forEach(n => mh.insert(n));
        mh.extract();
        expect(mh.array).toEqual([5,10,7,50,20,30]);
    });
});