class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findDuplicate(nums) {
        const map = new Map()
        for(let i=0;i<nums.length;i++){
            if(map.has(nums[i]))return nums[i]
            else map.set(nums[i],nums[i])
        }
    }
}
