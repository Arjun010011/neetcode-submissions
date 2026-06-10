class Solution:
    def isValid(self, s: str) -> bool:
        list = []
        object = {")": "(", "]": "[", "}": "{"}
        for elem in s:
            if elem == "(" or elem == "[" or elem == "{":
                list.append(elem)
            if elem == ")" or elem == "]" or elem == "}":
                val = object.get(elem)
                if list and list[-1] == val:
                    list.pop()
                else:
                    list.append(elem)
        if len(list) == 0:
            return True
        return False


