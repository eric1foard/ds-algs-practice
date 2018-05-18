class Node {
    constructor() {
        this.values = new Array();
        this.children = new Array();
    }
    
    insert(value) {
        this.values.push(value);
        this.values.sort((a,b) => a < b ? -1 : 1); 
        // NOTE: could sort faster by inserting elt into sorted pos rather than full sort of arr
    }

    hasChildren() {
        return Boolean(this.children.length);
    }
}

// INSERT CASES:
// tree is empty -- create root and insert value
// root is leaf and not full -- insert into root
// root not leaf, targetNode not full -- insert into target node
// root not leaf, target node full -- split target node and ancestors as needed
const _insert = (value, node) => {

};

class BTree {
    constructor(degree) {
        this.degree = degree;
        this.root = null;
    }
    insert(value) {
        if (!this.root) { // tree is empty -- create root and insert value
            this.root = new Node();
            this.root.insert(value);
        } else if (!this.root.hasChildren()) { // root is leaf and not full -- insert into root
            this.root.insert(value);
        } else { // root is not leaf

        }
    }
}

module.exports = {
    Node,
    BTree
}