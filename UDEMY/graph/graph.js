class Graph {
  constructor() {
    this.adjacencyList = {};
  }
  addNode(vertex) {
    if (this.adjacencyList[vertex]) {
      return false;
    }
    this.adjacencyList[vertex] = [];
    return true;
  }

  addEdge(vertex1, vertex2) {
    if (this.adjacencyList[vertex1] && this.adjacencyList[vertex2]) {
      this.adjacencyList[vertex1].push(vertex2);
      // take care of duplicates
      this.adjacencyList[vertex1] = [...new Set(this.adjacencyList[vertex1])];

      this.adjacencyList[vertex2].push(vertex1);
      // take care of duplicate
      this.adjacencyList[vertex2] = [...new Set(this.adjacencyList[vertex2])];
      return true;
    }
    return false;
  }
}

let myGraph = new Graph();
console.log(myGraph.addNode(`a`));
console.log(myGraph.addNode(`b`));
myGraph.addEdge(`a`, `b`);
myGraph.addEdge(`a`, `b`);
myGraph.addEdge(`a`, `b`);
myGraph.addEdge(`a`, `b`);

console.log(myGraph);
