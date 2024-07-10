//To be tested within a Binary Class

function similarLeave(root1, root2) {
  function checkIsSimilar(root, leafnodes) {
    if (!root) return;
    if (!root.left || !root.right) {
      leafnodes.push(root.value);
    }
    checkIsSimilar(root.left, leafnodes);
    checkIsSimilar(root.right, leafnodes);
  }
  let rootArr1 = [];
  let rootArr2 = [];
  checkIsSimilar(root1, rootArr1);
  checkIsSimilar(root2, rootArr2);

  return JSON.stringify(rootArr1) === JSON.stringify(rootArr2);
}
