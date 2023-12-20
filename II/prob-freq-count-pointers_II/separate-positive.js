// add whatever parameters you deem necessary
function separatePositive(nums) {

    let left = 0;
    let right = nums.length - 1;

    while (left < right) {
        let temp = 0
        if (nums[left]>0) left++
        if (nums[right]<0) right--

        if(nums[left]<0 && nums[right]>0) {
            temp = nums[left]
            nums[left] = nums[right]
            nums[right] = temp
            left++
            right--
        }
    }
    return nums
}