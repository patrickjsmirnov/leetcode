# https://leetcode.com/problems/destination-city/


class Solution:
    def dest_city(self, paths):
        result = None
        cities = {}
        for path in paths:
            cities[path[1]] = False

        for path in paths:
            cities[path[0]] = True

        for city in cities.items():
            if city[1] == False:
                result = city[0]

        return result

tmp = Solution()

print(tmp.dest_city([["B", "C"], ["D", "B"], ["C", "A"]]))
print(tmp.dest_city([["London", "New York"], ["New York", "Lima"], ["Lima", "Sao Paulo"]]))
print(tmp.dest_city([["A","Z"]]))