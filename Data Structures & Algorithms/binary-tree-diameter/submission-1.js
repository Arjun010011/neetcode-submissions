/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
  /**
   * @param {TreeNode} root
   * @return {number}
   */
  diameterOfBinaryTree(root) {
    let max = 0;
    function getHeight(node) {
      if (!node) return 0;
      const right = getHeight(node.right);
      const left = getHeight(node.left);
      max = Math.max(max, left + right);
      return 1 + Math.max(right, left);
    }

    getHeight(root);
    return max;
  }
}
