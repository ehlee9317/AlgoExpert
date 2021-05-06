/*
Write a function that takes in a potentially invalid Binary Search Tree (BST) and returns a boolean representing whether the BST is valid

Sample Input
tree =       10
           /    \
          5      15
        /  \    /  \
       2   5   13   22
      /         \
     1          14

Sample Output
True
*/

class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function validateBst(tree) {
  return validateBstHelper(tree, -Infinity, Infinity);
}

function validateBstHelper(tree, minValue, maxValue) {
  if (tree === null) return true;
  if (tree.value < minValue || tree.value >= maxValue) return false;

  const leftIsValid = validateBstHelper(tree.left, minValue, tree.value);
  return leftIsValid && validateBstHelper(tree.right, tree.value, maxValue);
}
