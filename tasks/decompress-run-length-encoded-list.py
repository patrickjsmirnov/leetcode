# https://leetcode.com/problems/decompress-run-length-encoded-list/


def decompress_rle_list(nums):
    result = []

    for i in range(0, len(nums), 2):
        tmp = []
        tmp += [nums[i+1] for j in range(0, nums[i])]
        result += tmp

    return result

print(decompress_rle_list([1, 2, 3, 4]))
print(decompress_rle_list([1, 1, 2, 3]))
print(decompress_rle_list([42, 39]))
print([39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39])