// add whatever parameters you deem necessary
function countPairs(nums, target) {

    let sorted = nums.sort((a,b) => a - b)

    let left = 0
    let right = sorted.length - 1
    let count = 0

    while (left<right) {

        let sum = nums[left] + nums[right]
       
        if (sum === target) {
            count++
            left++
            right--
        } else if (sum > target) {
            right--
        } else {
            left++
        }
    }
    return count
}
