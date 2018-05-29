const bfs = (node) => {
    let nextNodes = [node],
    result = [],
    currNode = null;

    if (!node) return result;

    while (nextNodes.length) {
        currNode = nextNodes[0];
        nextNodes = nextNodes.slice(1, nextNodes.length);
        if (!currNode.visited) {
            currNode.visited = true;
            result.push(currNode.value);
            currNode.neighbors.forEach(n => n.visited ? null : nextNodes.push(n));
        }
    }
    return result;
};

module.exports = {
    bfs
};