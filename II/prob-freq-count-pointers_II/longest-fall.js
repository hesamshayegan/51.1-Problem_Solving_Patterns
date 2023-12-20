// add whatever parameters you deem necessary
function longestFall(nums) {

    let p1 = 0
    let p2 = p1 + 1

    let maxCounter = 1
    let max = 0

    if (nums.length === 0) {
        return 0
    }

    while (p2<nums.length) {
        // debugger

        if (nums[p1]>nums[p2]) {
            maxCounter++
            max = Math.max(maxCounter, max)
        } else {
            maxCounter = 1
        }

        p1++
        p2++
    }

    return max || 1
}
