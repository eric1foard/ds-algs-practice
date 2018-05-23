const { Node, AVL } = require('./index');

test('AVL should be defined', () => {
    expect(AVL).toBeDefined();
});

test('Node should be defined', () => {
    expect(Node).toBeDefined();
});

let avl;
const fillAVL = (arr, avl) => {
    arr.forEach(e => avl.add(e));
    return avl;
};

beforeEach(() => {
    avl = new AVL();
});

describe('when searching for elements in the AVL tree', () => {
    it('should return true when element is in the tree', () => {
        fillAVL([5,2,3,4,1], avl);
        expect(avl.contains(1)).toBeTruthy();
    });
    it('should return false when element is in the tree', () => {
        fillAVL([5,2,3,4,1], avl);
        expect(avl.contains(7)).toBeFalsy();
    });
});

describe('when inserting elements into the AVL tree', () => {
    it('should correctly insert into an empty tree', () => {
        avl.add(1);
        expect(avl.contains(1)).toBeTruthy();
    });
    it('should correctly insert into a non-empty tree', () => {
        fillAVL([5,2,3,4,1], avl);
        expect(avl.contains(1)).toBeTruthy();
    });
});

describe('when removing elements from the AVL tree', () => {

});