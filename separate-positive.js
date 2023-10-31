// add whatever parameters you deem necessary

function separatePositive(nums) {
    
    let left = 0
    let right = nums.length - 1

    while (left < right) {



        if (nums[left] < 0 && nums[right] > 0) {
            
            const temp = nums[left];
            nums[left] = nums[right];
            nums[right] = temp;
            left++
            right--         
        
        } else if (nums[left] < 0 && nums[right] < 0) {
            
            right--
        
        } else if(nums[left] > 0 && nums[right] < 0) {

            left++
            right--
        
        } else {

            left++
            
        }
    }

    return (nums)

}


// p1 < 0 and p2 > 0 ---> switch and p1++ p2--
// p1 < 0 and p2 < 0 ---> p2--
// p1 > 0 and p2 < 0 ---> p1++ p2--
// p1 > 0 and p2 > 0 ---> p1++