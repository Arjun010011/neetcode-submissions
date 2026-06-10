class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let str = ''
        for(let i=0;i<strs.length;i++){
            str += strs[i]+':;';
        }
        return str
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        return str.split(':;').slice(0,-1);
    }
}