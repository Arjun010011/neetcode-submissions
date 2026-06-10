class Solution {
    public boolean hasDuplicate(int[] nums) {
      if(nums.length == 0 || nums.length == 1)return false;
        int i = 0;
        Arrays.sort(nums);
        for(int j=1;j<nums.length;j++){
          if(nums[i]!=nums[j]){
            i = j;
          }
          else{
            return true;
          }
        }
      return false;
    }
}