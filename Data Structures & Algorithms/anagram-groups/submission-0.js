
class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let sorted = [];
        let hash = new Map();
        for (let i = 0; i < strs.length; i++) {
            let sort = strs[i].split('').sort().join(''); 
            if(!hash.has(sort)){
                hash.set(sort,[]);
            }
            hash.get(sort).push(strs[i]);
        }
        return Array.from(hash.values());
    }
}

