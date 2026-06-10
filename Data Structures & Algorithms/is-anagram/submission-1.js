
class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if(s.length !== t.length){
            return false
        }

        let shash = {};
        let thash = {};

        for(let i=0;i<s.length;i++){
            shash[s[i]] = (shash[s[i]] || 0)+1;
            thash[t[i]] = (thash[t[i]] || 0)+1;
        }

        for(let char in shash){
            if(shash[char] !== thash[char]){
                return false
            }
        }
        return true;

            
    }
}