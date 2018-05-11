const Queue = require('./index');

test('Queue should be defined', () => {
  expect(Queue).toBeDefined();
});

test('queue should have head and tail props when invoked as a constructor', () => {
  let q = new Queue();
});
