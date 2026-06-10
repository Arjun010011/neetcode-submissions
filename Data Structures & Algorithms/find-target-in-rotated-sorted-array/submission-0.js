class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        for(let num in nums){
            if(nums[num]=== target){
                return num
            }
        }
        return -1
    }
}
