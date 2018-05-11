const { Node, Stack } = require('../stack/index');
let s;

beforeEach(() => {
    s = new Stack();
});

test('Stack should be defined', () => {
    expect(Stack).toBeDefined();
});

test('Stack should have the expected methods', () => {
    expect(typeof s.push).toEqual('function');
    expect(typeof s.pop).toEqual('function');
});

test('Stack should have the head field when instantiated', () => {
    expect(s.head).toBeNull();
});

test('should be able to push value onto empty stack', () => {
    s.push(1);
    expect(s.head.value).toEqual(1);
    expect(s.head.next).toBeNull();
});

test('should be able to push value onto non-empty stack', () => {
    const valArr = [0,1,2,3];
    valArr.forEach(val => s.push(val));
    
    let temp = s.head,
        i = valArr.length-1;
    while (temp.next) {
        expect(temp.value).toEqual(i);
        temp = temp.next;
        i--;
    }
});

test('pop should return null when stack is empty', () => {
    expect(s.pop()).toBeNull();
});

test('stack head should be null after pop on empty list', () => {
    s.pop();
    expect(s.head).toBeNull();
});

test('pop should return value of head when stack is non-empty', () => {
    const valArr = [0,1,2,3];
    valArr.forEach(val => s.push(val)); 
    let i = valArr.length-1;
    while(i >= 0) {
        expect(s.pop()).toEqual(i);
        i--;
    }
    expect(s.head).toBeNull();
});

test('pop should correctly update head when list is non-empty', () => {
    const valArr = [0,1,2,3];
    valArr.forEach(val => s.push(val)); 
    let i = valArr.length-1;
    while(i >= 0) {
        expect(s.head.value).toEqual(i);
        s.pop();
        i--;
    }
    expect(s.head).toBeNull();
});