function treeRightView(root) {
  if (!root) return [];
  let store = [];

  function bfs(node, i) {
    if (!node) return;
    store[i] = node.val;
    bfs(node.left, i + 1);
    bfs(node.right, i + 1);
  }
  bfs(root, 0);
  return store;
}
