const { bfs } = require('./bfs');
const sg = require('./common/sample-graphs');

test('bfs should be defined', () => {
    expect(bfs).toBeDefined();
});

let g;

describe('when performing bfs on a graph', () => {
    it('should return null if graph is empty', () => {
        expect(bfs(g)).toEqual([]);
    });
    it('should give correct traversal order for graph with 1 node', () => {
        g = sg.singleNodeGraph();
        expect(bfs(g)).toEqual([1]);
    });
    it('should give correct traversal order for graph shaped like a linked list', () => {
        g = sg.singlePathGraph();
        expect(bfs(g)).toEqual([1,2,3]);
    });
    it('should give correct traversal order for graph with no cycles', () => {
        g = sg.noCyclesGraph();
        expect(bfs(g)).toEqual([0,1,2,3,4]); 
    });
    it('should give correct traversal order for graph with cycles', () => {
        g = sg.cycleGraph();
        expect(bfs(g)).toEqual([0,1,4,2,3]);
    });
});