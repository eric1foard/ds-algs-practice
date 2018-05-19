const { Node } = require('./index');
const DEGREE = 3;

test('Node should be defined', () => {
    expect(Node).toBeDefined();
});

let n;
beforeEach(() => {
    n = new Node(DEGREE);
});

describe('when instantiating the Node', () => {
    it('should have the expected properties', () => {
        expect(n.values).toEqual([]);
        expect(n.children).toEqual([]);
    });
});

describe('when determining if a Node has children', () => {
    it('should return false when Node has no children', () => {
        expect(n.hasChildren()).toEqual(false);
    });
    it('should return true when Node has children', () => {
        n.children.push(new Node(DEGREE));
        expect(n.hasChildren()).toEqual(true);
    });
});

describe('when determining if there is space in the node for a new value', () => {
    it('should return false if node is full', () => {
        [,1,2,3,4,5].forEach(v => n.insert(v));
        expect(n.hasSpace()).toEqual(false);
    });
    it('should return true if node is not full', () => {
        expect(n.hasSpace()).toEqual(true);
    });
});

describe('when inserting values into the node', () => {
    it('should insert value correctly into an empty node', () => {
        n.insert(1);
        expect(n.values).toEqual([1]);
        expect(n.children).toEqual([]);
    });
    it('should insert values into correct sorted position in values arr', () => {
        [4,2,1,3].forEach(v => n.insert(v));
        expect(n.values).toEqual([1,2,3,4]);
    });
});