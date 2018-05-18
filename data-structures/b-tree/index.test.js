const { BTree } = require('./index');

const buildTree = (arr, bt) => {
    arr.forEach(v => bt.insert(v));
    return bt;
}

test('BTree should be defined', () => {
    expect(BTree).toBeDefined();
});

let bt;
const DEGREE = 5;
beforeEach(() => {
    bt = new BTree(DEGREE);
});

describe('when instantiating the BTree', () => {
    it('should be defined', () => {
        expect(bt).toBeDefined();
    });
    it('should have the expected properties', () => {
        expect(bt.root).toBeNull();
        expect(bt.degree).toEqual(DEGREE);
    });
});

describe('when inserting nodes into the BTree', () => {
    it('should correctly insert into an empty BTree', () => {
        bt.insert(1);
        expect(bt.root.values).toEqual([1]);
        expect(bt.root.children).toEqual([]);
    });
    it('should correctly insert into a BTree with non-empty root that is also a leaf', () => {
        buildTree([4,2,1], bt);
        expect(bt.root.values).toEqual([1,2,4]); 
        expect(bt.root.children).toEqual([]);
        bt.insert(3);
        expect(bt.root.values).toEqual([1,2,3,4]);
        expect(bt.root.children).toEqual([]);
    });
});