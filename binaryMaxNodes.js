// will be tested within a Binary search tree Class
function goodNodes(root) {
  let count = 0;

  function dfs(node, max) {
    if (!node) return;
    if (node.val >= max) {
      count++;
      max = vode.val;
    }
    dfs(node.right, max);
    dfs(node.left, max);
  }
  dfs(root, root.val);
}
