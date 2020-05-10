# https://leetcode.com/problems/range-sum-of-bst/


class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right


class Solution:
    def range_sum_bst(self, root, l, r):
        def dfs(node):
            if node:
                if l <= node.val <= r:
                    self.ans += node.val
                if l < node.val:
                    dfs(node.left)
                if node.val < r:
                    dfs(node.right)

        self.ans = 0

        dfs(root)
        return self.ans


y = TreeNode([10, 5, 15, 3, 7, None, 18])


x = Solution()

x.range_sum_bst([10, 5, 15, 3, 7, None, 18], 7, 15)