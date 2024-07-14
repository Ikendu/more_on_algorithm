// will be tested in a Binary Tree Class
function commonAncestor(root, p, q) {
  if (!root || root == p || root == q) return root;

  let left = commonAncestor(root.left, p, q);
  let right = commonAncestor(root.right, p, q);

  if (!left) return right;
  if (!right) return left;

  return root;
}
