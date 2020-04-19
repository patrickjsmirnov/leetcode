# https://leetcode.com/problems/create-target-array-in-the-given-order/


def create_target_array(nums, index):
    tmp = [''] * len(nums)
    result = []

    for idx in range(len(index)):
        ind = index[idx]

        if tmp[ind] == '':
            tmp[ind] = nums[ind]
        else:
            tmp = tmp[:ind] + [nums[idx]] + tmp[-(len(tmp) - ind):len(tmp)]

    for item in tmp:
        if item != '':
            result.append(item)

    return result


print('finally = ', create_target_array([0, 1, 2, 3, 4], [0, 1, 2, 2, 1]))
print('finally = ', create_target_array([1, 2, 3, 4, 0], [0, 1, 2, 3, 0]))
print('finally = ', create_target_array([1], [0]))
