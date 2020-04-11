# https://leetcode.com/problems/number-of-steps-to-reduce-a-number-to-zero/


def number_of_steps(num):
    count = 0
    while num > 0:
        count += 1
        if num % 2 == 0:
            num /= 2
        else:
            num -= 1
    return count

print (number_of_steps(8))



