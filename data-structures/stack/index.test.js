const { Node, Stack } = require('../stack/index');
let s;

beforeEach(() => {
    s = new Stack();
});

test('Stack should be defined', () => {
    expect(Stack).toBeDefined();
});

test('Stack should have the head field when instantiated', () => {
    expect(s.head).toBeNull();
});