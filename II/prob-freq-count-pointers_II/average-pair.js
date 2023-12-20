// add whatever parameters you deem necessary
function averagePair(nums, target) {

    let start = 0
    let end = nums.length-1
   

    while (start < end) {

        let avg = (nums[start]+nums[end])/2

        if (avg === target) {
            return true
        } else if (avg < target) {
            start++
        } else {
            end--
        }
    }

    return false
}
