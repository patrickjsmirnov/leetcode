# https://leetcode.com/problems/defanging-an-ip-address/


def defang_ip_addr(ip):
    return ip.replace(".", "[.]")


print(defang_ip_addr('1.1.1.1'))
