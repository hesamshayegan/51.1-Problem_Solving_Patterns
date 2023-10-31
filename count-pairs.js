// add whatever parameters you deem necessary
function countPairs(nums, target) {

    console.log('nums', nums)
    
    nums.sort((a, b) => a - b);

    console.log('sorted nums', nums)

    let count = 0
    let p1 = 0
    let p2 = nums.length - 1
    
    while (p1 < p2) {

            let sum = nums[p1] + nums[p2]

            if (sum === target) {
                    
                count += 1
                p1++
                p2--

            } else if (sum < target)

                p1++

            else {

                p2--
            }

        }

        return count
}

