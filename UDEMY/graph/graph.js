class Graph {
  constructor() {
    this.adjacanceyList = {};
  }
  addNode(vertex) {
    if (!this.adjacanceyList[vertex]) {
      this.adjacanceyList[vertex] = [];
      return true;
    }
    return false;
  }
}
