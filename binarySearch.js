//less efficient solution
function binarySearch(root, value) {
  if (!root) return null;
  if (root.value === value) {
    return root;
  } else if (root.value > value) return binarySearch(root.left, value);
  else if (root.value < value) return binarySearch(root.right, value);
}

//more efficient solution
function binarySearch2(root, value) {
  if (!root) return null;
  while (root) {
    if (root.value == value) return root;
    else if (root.value > value) root = root.left;
    else root = root.right;
  }
  return null;
}
