const { BST, Node } = require('./index');

const fillBST = (arr, bst) => {
    arr.forEach(e => bst.add(e));
    return bst;
}

test('the BST should be defined', () => {
    expect(BST).toBeDefined();
});

let bst;
beforeEach(() => {
    bst = new BST();
});

describe('when instantiating the BST', () => {
    it('should have a root property of null', () => {
        expect(bst.root).toBeNull();
    });
});

describe('when inserting elements into the BST', () => {
    it('should set inserted element as root when tree is empty', () => {
        bst.add(3);
        expect(bst.root.value).toEqual(3);
        expect(bst.root.left).toBeNull();
        expect(bst.root.right).toBeNull();
    });
    it('should insert element into left subtree when smaller than root', () => {
        fillBST([2,3,4,1], bst);
        expect(bst.root.left.value).toEqual(1);
    });
    it('should correctly insert element into right subtree when larger than root', () => {
        fillBST([3,2,1,4], bst);
        expect(bst.root.right.value).toEqual(4); 
    });
});

describe('when checking if the tree is empty', () => {
    it('should return true if tree is empty', () => {
        expect(bst.isEmpty()).toBeTruthy();
    })  
    it('should return false if tree is not empty', () => {
        bst.add(3);
        expect(bst.isEmpty()).toBeFalsy();
    }) 
});

describe('when finding elements in the BST', () => {
    it('should return null when tree is empty', () => {
        expect(bst.contains(3)).toEqual(false);
    });
    it('should return null when element does not exist in tree', () => {
        bst.add(3);
        expect(bst.contains(1)).toEqual(false);
    }),
    it('should find element when element is not a leaf', () => {
        fillBST([2,3,4,1], bst);
        expect(bst.contains(3)).toEqual(true); 
    });
    it('should find element when element is a leaf', () => {
        fillBST([2,3,4,1], bst);
        expect(bst.contains(1)).toEqual(true); 
    });
});

describe('when deleting an element in the BST', () => {
    it('should not modify BST if tree is empty', () => {
        bst.remove(1);
        expect(bst.root).toBeNull();
    });
    it('should not modify the BST if target element is not in tree', () => {

    });
    it('should correctly remove element if element is a leaf node', () => {
        fillBST([1,2,3,4], bst);
        bst.remove(4);
        expect(bst).toEqual(fillBST([1,2,3], new BST()));
    });
    it('should correctly remove element if element has only one child', () => {
        fillBST([1,2,3,4], bst);
        bst.remove(3);
        expect(bst).toEqual(fillBST([1,2,4], new BST()));
    });
    it('should correctly remove element if element has two children', () => {
        fillBST([10,5,11,2,7,12,1,3,6,8], bst);
        bst.remove(5);
        expect(bst).toEqual(fillBST([10,3,11,2,7,12,1,6,8], new BST())); 
    });

    it('should correctly remove target when target has 2 children and element to replace target has left subtree', () => {
        fillBST([10,5,11,2,7,12,1,3,6,8,2.5], bst);
        bst.remove(5);
        expect(bst).toEqual(fillBST([10,3,11,2,7,12,1,2.5,6,8], new BST()));
    });
});