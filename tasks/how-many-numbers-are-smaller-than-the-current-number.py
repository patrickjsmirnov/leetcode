# https://leetcode.com/problems/how-many-numbers-are-smaller-than-the-current-number/


def smaller_numbers_than_current(nums):
    arr = [0] * 101
    for n in nums:
        arr[n] += 1

    num_smaller = [arr[0]]
    for i in range(1, len(arr)):
        num_smaller.append(num_smaller[-1] + arr[i])

    ans = []
    for i in range(len(nums)):
        ans.append(num_smaller[nums[i]] - arr[nums[i]])
    return ans


print(smaller_numbers_than_current([8, 1, 2, 2, 3]))
