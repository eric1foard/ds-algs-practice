class Node {
    constructor(id) {
        this.distance = Infinity;
        this.id = id;
    }
}

const getNeighbors = (node, adjMatrx, nodes) => {
    return adjMatrx[node.id].reduce((acc, edge, i) => {
        if (edge) {
            acc.push({
                edgeWeight: edge,
                node: nodes[i]
            });
        }
        return acc;
    }, []);
};

// NOTE: this would be faster with a linked list
const pqInsert = (node, pq) => {
    let insertPos = 0;
    while (pq[insertPos] && pq[insertPos].distance > node.distance) {
        insertPos++;
    }
    return pq.slice(0, insertPos)
    .concat(node)
    .concat(pq.slice(insertPos, pq.length));
};

const search = (adjMatrx) => {
    if (!(adjMatrx.length && adjMatrx[0].length)) return [];
    const nodes = adjMatrx.map((n, i) => new Node(i));
    const root = nodes[0];
    root.distance = 0;
    let nextToVisit = [root];

    while (nextToVisit.length) {
        let next = nextToVisit.pop();
        let neighbors = getNeighbors(next, adjMatrx, nodes);
        neighbors.forEach(n => {
            if (n.node.distance > next.distance + n.edgeWeight) {
                n.node.distance = next.distance + n.edgeWeight;
                nextToVisit = pqInsert(n.node, nextToVisit);
            }
        });
    }
    return nodes;
};

module.exports = {
    search
}