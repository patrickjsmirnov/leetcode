# https://leetcode.com/problems/jewels-and-stones/


def num_jewels_in_stones(j, s):
    count = 0
    for letter_j in j:
        count += s.count(letter_j)

    return count


print(num_jewels_in_stones("aAs", "aAAbbbbs"))
