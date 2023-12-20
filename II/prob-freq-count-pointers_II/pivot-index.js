// add whatever parameters you deem necessary
function pivotIndex(nums) {

    let leftSum = 0
    let rightSum = 0

    let smallestIdx = []
    let result;

    rightSum = nums.reduce((acc, curr) => acc+curr, 0)

    for (let i=0; i<nums.length; i++) {

        let curr = nums[i]

        rightSum -= curr

        if (leftSum === rightSum) {
            
            smallestIdx.push(i)
        
        }

        leftSum += curr
    
    }

    result = smallestIdx.length > 0 ? Math.min(...smallestIdx) : -1


    return result
    
}


// pivotIndex([1,2,1,6,3,1]) // 3
// pivotIndex([5,2,7]) // -1  no valid pivot index
// pivotIndex([-1,3,-3,2]) // 1 valid pivot at 2: -1 + 3 = 2 however there is a smaller valid pivot at 1: -1 = -3 + 2