class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMin(nums) {
        let target = Math.max(...nums)
        for(let num of nums){
            if(num<target) target = num
        }
        return target
    }
}
