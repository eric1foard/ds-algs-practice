const { BTree, Node } = require('./index');

const buildTree = (arr, bt) => {
    arr.forEach(v => bt.insert(v));
    return bt;
}

const testTree = () => {
    let testTree = new Node(DEGREE);
        testTree.isRoot = true;
        testTree.values = [25];
        let leftChild = new Node(DEGREE);
        leftChild.values = [10,20];
        let rightChild = new Node(DEGREE);
        rightChild.values = [30,40,50];
        testTree.children = [leftChild, rightChild];
        return testTree;
};

test('BTree should be defined', () => {
    expect(BTree).toBeDefined();
});

let bt;
const DEGREE = 3;
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
    it('should correctly insert value into leaf without splitting', () => {
        buildTree([10,20,30,40,50,25, 5], bt);
        const tt = testTree();
        tt.children[0].insert(5);
        expect(bt.root).toEqual(tt);
    });
    it('should cause root to be split when new elt cannot fit in root', () => {
        buildTree([10,20,30,40,50,25], bt);
        expect(bt.root).toEqual(testTree());
    });
    it('should correctly split a non-root node', () => {
        buildTree([10,20,30,40,50,25,5,7,6,9], bt);
        expect(bt.root.values).toEqual([9,25]);
        expect(bt.root.children[0].values).toEqual([5,6,7]);
        expect(bt.root.children[1].values).toEqual([10,20]);
        expect(bt.root.children[2].values).toEqual([30,40,50]);
        //expect(bt.root.children[0].values).toEqual([9])
    });
});