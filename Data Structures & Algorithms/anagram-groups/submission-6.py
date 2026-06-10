
class Solution:
    def groupAnagrams(self, strs: List[str]) -> List[List[str]]:
        map = {}
        for str in strs:
            elem = "".join(sorted(str))
            if map.get(elem):
                map[elem].append(str)
            else:
                map[elem] = [str]
        return list(map.values())


