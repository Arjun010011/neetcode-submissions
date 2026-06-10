
class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let map = new Map();
        let array = [];
        for(let i =0 ; i<nums.length;i++){
            map.set(nums[i],(map.get(nums[i])  || 0)+1);           
        } for(let  [key,value] of map){
            array.push([key,value]);

        }
        array.sort((a,b)=> b[1]-a[1]);
        let result = [];
       for(let i=0;i<k;i++) {
            result.push(array[i][0]);
        }
        return result;
    }
}