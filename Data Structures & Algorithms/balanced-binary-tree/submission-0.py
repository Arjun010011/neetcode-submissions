# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right


class Solution:
    def isBalanced(self, root: Optional[TreeNode]) -> bool:
        def check(node):
            if node is None:
                return 0
            left_height = check(node.left)
            if left_height == -1:
                return -1

            right_height = check(node.right)
            if right_height == -1:
                return -1
            if abs(right_height - left_height) > 1:
                return -1
            else:
                return 1 + max(right_height, left_height)

        if check(root) is -1:
            return False
        return True

