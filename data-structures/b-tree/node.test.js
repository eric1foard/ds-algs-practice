const { Node } = require('./index');

test('Node should be defined', () => {
    expect(Node).toBeDefined();
});

let n;
beforeEach(() => {
    n = new Node();
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
        n.children.push(new Node());
        expect(n.hasChildren()).toEqual(true);
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