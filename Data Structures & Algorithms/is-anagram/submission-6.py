class Solution:
    def isAnagram(self, s: str, t: str) -> bool:
        mapS = {}
        mapT = {}

        for char in s:
            mapS[char] = mapS.get(char, 0) + 1
        for char in t:
            mapT[char] = mapT.get(char, 0) + 1
        if mapS == mapT:
            return True
        return False


