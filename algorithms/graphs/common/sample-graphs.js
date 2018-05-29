const { Node } = require('./graph-node');

const singleNodeGraph = () => {
     return new Node(1);
};

const singlePathGraph = () => {
    let g = new Node(1),
        n1 = new Node(2),
        n2 = new Node(3);
    n1.neighbors.push(n2);
    g.neighbors.push(n1);
    return g;
};

const noCyclesGraph = () => {
    let n0 = new Node(0),
        n1 = new Node(1),
        n2 = new Node(2);
        n3 = new Node(3),
        n4 = new Node(4);
    n0.neighbors.push(n1, n2);
    n1.neighbors.push(n3, n4);
    return n0;
};

const cycleGraph = () => {
    let n0 = new Node(0),
    n1 = new Node(1),
    n2 = new Node(2);
    n3 = new Node(3),
    n4 = new Node(4);
    n0.neighbors.push(n0, n1, n4);
    n1.neighbors.push(n2);
    n2.neighbors.push(n4, n3);
    n3.neighbors.push(n4, n0);
    n4.neighbors.push(n3);
    return n0;
}

module.exports = {
    singleNodeGraph,
    singlePathGraph,
    noCyclesGraph,
    cycleGraph
}