function tree_intersection(binaryTree1, binaryTree2) {
  const hashTable = new Hashtable();
  const intersections = [];
  function traversal(node) {
    if (node.left) traversal(node.left);
    hashTable.set(node.value, 1);
    if (node.right) traversal(node.right);
  }
  traversal(binaryTree1.root);
  function checkIntersections(node) {
    if (hashTable.has(node.value)) {
      intersections.push(node.value);
    }
    checkIntersections(node.left);
    checkIntersections(node.right);
  }
  checkIntersections(binaryTree2.root);
  return intersections;
}

tree_intersection();
