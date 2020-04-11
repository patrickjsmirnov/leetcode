# https://leetcode.com/problems/subtract-the-product-and-sum-of-digits-of-an-integer/


def subtract_product_and_sum(n):
    product = 1
    sum = 0

    while n != 0:
        product = product * (n % 10)
        sum += (n % 10)
        n = n // 10

    return product - sum


print(subtract_product_and_sum(234))
