const dfs = (node) => {
    let nextNodes = [node],
    result = [],
    currNode = null;

    if (!node) return result;

    while (nextNodes.length) {
        currNode = nextNodes[nextNodes.length-1];
        nextNodes = nextNodes.slice(0, nextNodes.length-1);
        if (!currNode.visited) {
            currNode.visited = true;
            result.push(currNode.value);
            currNode.neighbors.forEach(n => n.visited ? null : nextNodes.push(n));
        }
    }
    return result;
};

module.exports = {
    dfs
};