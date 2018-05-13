const { Node, LinkedList } = require('./index');
let ll;

beforeEach(() => {
    ll = new LinkedList();
});

const testList = arr => {
    let ll = new LinkedList();
    arr.forEach(e => ll.add(e));
    return ll;
}

describe('when creating a new LinkedList', () => {
    test('it should be defined', () => {
        expect(LinkedList).toBeDefined();
    });
    
    test('it should have expected methods', () => {
        expect(typeof ll.add).toEqual('function');
        expect(typeof ll.remove).toEqual('function');
        expect(typeof ll.contains).toEqual('function');
    });
    
    test('it should head & tail fields of null after being instantiated', () => {
        expect(ll.head).toBeNull();
        expect(ll.tail).toBeNull();
    });
});

describe('when adding elements to the LinkedList', () => {
    test('it should correctly add element to empty list', () => {
        ll.add(3);
        expect(ll.head.value).toEqual(3);
        expect(ll.head.next).toBeNull();
    });
    test('it should correctly add element to non-empty list', () => {
        ll.add(3);
        ll.add(4);
        expect(ll.head.value).toEqual(3);
        expect(ll.head.next.value).toEqual(4);
        expect(ll.head.next.next).toEqual(null);
        expect(ll.tail.value).toEqual(4);
        expect(ll.tail.next).toEqual(null);
    });
});

describe('when checking to see if LinkedList is empty', () => {
    test('method isEmpty should return true if list is empty', () => {
        expect(ll.isEmpty()).toBeTruthy();
    });
    test('method isEmpty should return false when LinedList is non-empty', () => {
        ll.add(3);
        expect(ll.isEmpty()).toBeFalsy();
    });
});

describe('when checking to see if LinkedList contains a value', () => {
    test('it should return false if the list is empty', () => {
        expect(ll.contains(1)).toEqual(false);
    });
    test('it should return false if the list does not contain the target value', () => {
        [1,2,3].forEach(num => ll.add(num));
        expect(ll.contains(4)).toEqual(false);
    });
    test('it should return true if the list does contain the target value', () => {
        [1,2,3].forEach(num => ll.add(num));
        expect(ll.contains(2)).toEqual(true);
    });
});

describe('when removing a node from a LinkedList', () => {
    test('it should not modify empty list', () => {
        ll.remove(1);
        expect(ll.head).toBeNull();
    });
    test('it should not modify list if removal target DNE in list', () => {
        [1,2,3].forEach(num => ll.add(num));
        ll.remove(4);
        expect(ll).toEqual(testList([1,2,3]));
    });
    test('it should correctly remove head from list', () => {
        [1,2,3].forEach(num => ll.add(num));
        ll.remove(1);
        expect(ll).toEqual(testList([2,3])); 
    });
    test('it should correctly remove tail from list', () => {
        [1,2,3].forEach(num => ll.add(num));
        ll.remove(3);
        expect(ll).toEqual(testList([1,2])); 
    });
    test('it should correctly remove non head/tail node from list', () => {
        [1,2,3].forEach(num => ll.add(num));
        ll.remove(2);
        expect(ll).toEqual(testList([1,3]));  
    });
}); 