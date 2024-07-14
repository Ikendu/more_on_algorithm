function zigzagMax(root) {
  let maxCount = 0;

  function dfs(node, isLeft, max) {
    if (!node) return;

    maxCount = Math.max(maxCount, max);

    if (isLeft) {
      dfs(node.left, false, max + 1);
      dfs(node.right, true, 1);
    } else {
      dfs(node.right, true, max + 1);
      dfs(node.left, false, 1);
    }
  }

  dfs(root.left, false, 1);
  dfs(root.right, true, 1);

  return maxCount;
}
