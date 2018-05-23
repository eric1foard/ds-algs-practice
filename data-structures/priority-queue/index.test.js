const { Node, PriorityQueue } = require('./index');

const fillPQ = (arr, pq) => {
    arr.forEach(e => pq.enqueue(e, e));
    return pq;
};

test('PriorityQueue should be defined', () => {
    expect(PriorityQueue).toBeDefined();
});

let pq;
beforeEach(() => {
    pq = new PriorityQueue();
});

describe('when inserting elements into the queue', () => {
    it('should correctly insert into empty queue', () => {
        pq.enqueue(0, 0);
        expect(pq.head.value).toEqual(0);
        expect(pq.head.next).toBeNull();
    });
    it('should correctly insert when new elt is highest priority', () => {
        fillPQ([0,1], pq);
        expect(pq.head.value).toEqual(0);
    });
    it('should correctly insert when new elt is lowest priority', () => {
        fillPQ([0,1], pq);
        expect(pq.head.next.value).toEqual(1); 
    });
    it('should correctly insert when new elt is intermediate priority', () => {
        fillPQ([0,2,1], pq);
        expect(pq).toEqual(fillPQ([0,1,2], new PriorityQueue()));
    });
    it('should insert duplicates into the correct position', () => {
        fillPQ([0,2,1,2,1], pq);
        expect(pq).toEqual(fillPQ([0,1,1,2,2], new PriorityQueue()));
    });
});

describe('when dequeueing elements', () => {
    it('should not modify PQ when empty', () => {
        pq.dequeue();
        expect(pq.head).toBeNull();
    });
    it('should remove highest priority element if PQ is non-empty', () => {
        fillPQ([3,1,0,2], pq);
        pq.dequeue();
        expect(pq).toEqual(fillPQ([1,2,3], new PriorityQueue()));
    });
    it('should correctly handle case where elt to dequeue is last elt', () => {
        fillPQ([0], pq);
        pq.dequeue();
        expect(pq).toEqual(new PriorityQueue());
    });
});