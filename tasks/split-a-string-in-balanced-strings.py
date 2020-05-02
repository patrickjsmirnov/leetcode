# https://leetcode.com/problems/split-a-sing-in-balanced-sings/


def balanced_sing_split(s):
    result = 0
    counts = {'L': 0, 'R': 0}

    sub_s = s[0]
    counts[s[0]] += 1

    for idx in range(1, len(s)):
        counts[s[idx]] += 1
        sub_s += s[idx]

        if counts['L'] == counts['R']:
            counts['L'] = 0
            counts['R'] = 0
            sub_s = ''
            result += 1

    return result


def balanced_sing_split_2(s):
    res = 0

    balance_score = 0
    for i in range(len(s)):
        if s[i] == 'R':
            balance_score += 1
        else:
            balance_score -= 1

        if balance_score == 0:
            res += 1

    return res

print(balanced_sing_split('RLRRLLRLRL'))
print(balanced_sing_split("RLLLLRRRLR"))
print(balanced_sing_split("LLLLRRRR"))
print(balanced_sing_split("RLRRRLLRLL"))

print(balanced_sing_split_2('RLRRLLRLRL'))
print(balanced_sing_split_2("RLLLLRRRLR"))
print(balanced_sing_split_2("LLLLRRRR"))
print(balanced_sing_split_2("RLRRRLLRLL"))
