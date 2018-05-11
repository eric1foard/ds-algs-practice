const { Queue, Node } = require('./index');

let q;

beforeEach(() => {
  q = new Queue();
});

test('Queue should be defined', () => {
  expect(Queue).toBeDefined();
});

test('queue should have head and tail props when invoked as a constructor', () => {
  expect(q.head).toBeDefined();
  expect(q.tail).toBeDefined();
});

test('queue should have an isEmpty method', () => {
  expect(typeof q.isEmpty).toBe('function'); 
});

test('isEmpty should return true when queue is empty', () => {
  expect(q.isEmpty()).toBeTruthy();
});

test('isEmpty should return false when queue is non-empty', () => {
  q.enqueue(2);
  expect(q.isEmpty()).toBeFalsy();
});

test('queue should have an enqueue method', () => {
  expect(typeof q.enqueue).toBe('function');
});

test('enqueue should correctly insert element into an empty queue', () => {
  q.enqueue(3);
  expect(q.head).toEqual(q.tail);
  expect(q.head instanceof Node).toBeTruthy();
  expect(q.head.value).toEqual(3);
  expect(q.head.next).toBeNull();
});

test('queue should correctly insert element into a non-empty queue', () => {
  q.enqueue(3);
  expect(q.head).toEqual(q.tail);
  q.enqueue(7);
  expect(q.head).not.toEqual(q.tail);
  expect(q.head.value).toEqual(3);
  expect(q.tail.value).toEqual(7);
  expect(q.head.next.value).toEqual(7);
  expect(q.tail.next).toBeNull();
});

test('queue should have a dequeue method', () => {
  expect(typeof q.dequeue).toEqual('function');
});

test('dequeue should return null for an empty queue', () => {
  expect(q.dequeue()).toBeNull();
});

test('dequeue should not modify an empty queue', () => {
  expect(q.head).toBeNull();
  expect(q.tail).toBeNull();
});

test('dequeue should return correct value when queue has single element', () => {
  q.enqueue(1);
  expect(q.dequeue()).toEqual(1);
});

test('dequeue should correctly modify queue structure when queue has one element', () => {
  q.enqueue(1);
  q.dequeue();
  expect(q.head).toBeNull();
  expect(q.tail).toBeNull();
});

test('dequeue should return correct value when queue has multiple elements', () => {
  [0,1,2,3].forEach(v => q.enqueue(v));
  expect(q.dequeue()).toEqual(0);
});

test('dequeue should correctly modify queue structure when queue has multiple elements', () => {
  [0,1,2,3].forEach(v => q.enqueue(v));
  q.dequeue();
  expect(q.head.value).toBe(1);
  expect(q.tail.value).toBe(3);
});