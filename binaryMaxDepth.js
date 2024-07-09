function maxDepth(root) {
  if (root == null) return 0;

  let rightDepth = maxDepth(root.right);
  let leftDepth = maxDepth(root.left);

  return Math.max(rightDepth, leftDepth) + 1;
}
