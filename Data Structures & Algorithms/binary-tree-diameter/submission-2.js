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

   
    let res = 0;
    function dfs(root) {
      if (root === null) return 0;

      const right = dfs(root.right);
      const left = dfs(root.left);
      res = Math.max(res, right + left);
      return 1 + Math.max(right,left);
    }
    dfs(root);
    return res
    
  }
    }

