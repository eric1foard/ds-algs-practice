const { dfs } = require('./dfs');
const sg = require('./common/sample-graphs');

test('dfs should be defined', () => {
    expect(dfs).toBeDefined();
});

let g;

describe('when performing dfs on a graph', () => {
    it('should return null if graph is empty', () => {
        expect(dfs(g)).toEqual([]);
    });
    it('should give correct traversal order for graph with 1 node', () => {
        g = sg.singleNodeGraph();
        expect(dfs(g)).toEqual([1]);
    });
    it('should give correct traversal order for graph shaped like a linked list', () => {
        g = sg.singlePathGraph();
        expect(dfs(g)).toEqual([1,2,3]);
    });
    it('should give correct traversal order for graph with no cycles', () => {
        g = sg.noCyclesGraph();
        expect(dfs(g)).toEqual([0,2,1,4,3]); 
    });
    it('should give correct traversal order for graph with cycles', () => {
        g = sg.cycleGraph();
        expect(dfs(g)).toEqual([0,4,3,1,2]);
    });
});