const { search } = require('./dijkstra');

describe('when testing Dijkstra\'s single source shortest parth algorithm', () => {
    test('the search function should be defined', () => {
        expect(search).toBeDefined();
    });

    let adjMtx;

    it('should return min distance to each node for an empty graph', () => {
        expect(search([[]])).toEqual([]);
    });
    it('should return min distance to each node for a graph with one node', () => {
        adjMtx = [[0]];
        const result = search(adjMtx);
        expect(result.length).toEqual(1);
        expect(result[0].distance).toEqual(0);
    });
    it('should return min distance to each node for a graph with two nodes', () => {
        adjMtx = [[0, 1], [1, 0]];
        const result = search(adjMtx);
        expect(result.length).toEqual(2);
        expect(result.map(n => n.distance)).toEqual([0, 1]);
    });
    it('should return min distance to each node for a graph with more nodes', () => {
        adjMtx = [
            [0,3,4,1,0],
            [3,0,2,0,0],
            [4,2,0,0,2],
            [1,0,0,0,1],
            [0,0,2,1,0]
        ];
        const result = search(adjMtx);
        expect(result.length).toEqual(5);
        expect(result.map(n => n.distance)).toEqual([0,3,4,1,2]);
    });
    it('should return min distance to each node for a graph with even more nodes', () => {
        adjMtx = [
            [0, 4, 0, 0, 0, 0, 0, 8, 0],
            [4, 0, 8, 0, 0, 0, 0, 11, 0],
            [0, 8, 0, 7, 0, 4, 0, 0, 2],
            [0, 0, 7, 0, 9, 14, 0, 0, 0],
            [0, 0, 0, 9, 0, 10, 0, 0, 0],
            [0, 0, 4, 14, 10, 0, 2, 0, 0],
            [0, 0, 0, 0, 0, 2, 0, 1, 6],
            [8, 11, 0, 0, 0, 0, 1, 0, 7],
            [0, 0, 2, 0, 0, 0, 6, 7, 0]
        ];
        const result = search(adjMtx);
        expect(result.length).toEqual(9);
        expect(result.map(n => n.distance)).toEqual([0,4,12,19,21,11,9,8,14]);
    });
})