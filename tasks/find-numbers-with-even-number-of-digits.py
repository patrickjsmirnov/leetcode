# https://leetcode.com/problems/find-numbers-with-even-number-of-digits/


def find_numbers(nums):
    count = 0

    for num in nums:
        if len(str(num)) % 2 == 0:
            count += 1

    return count


print(find_numbers([12, 345, 2, 6, 7896]))