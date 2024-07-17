function deleteNode(root, key) {
  function removeNode(node, key) {
    if (!node) return null;
    if (key > node.val) node.right = removeNode(node.right, key);
    else if (key < node.val) node.left = removeNode(node.left, key);
    else {
      if (!node.right && !node.left) return null;
      if (!node.right) return node.left;
      if (!node.left) return node.right;
      node.val = min(node.right);
      node.right = removeNode(node.right, node.val);
    }
    return node;
  }
  return removeNode(root, key);
}

function min(node) {
  if (!node.left) return node.val;
  return min(node.left);
}
