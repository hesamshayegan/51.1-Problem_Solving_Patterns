// add whatever parameters you deem necessary

function averagePair(arr, target) {

    let left = 0
    let right = arr.length - 1


    while (left < right) {

        const avg = (arr[left]+arr[right]) / 2

        if (avg === target) {
            return true

        } else if (avg < target) {
            left++

        } else {
            right--;
        }

    }

        return false
}


// averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8); // true
// averagePair([-1, 0, 3, 4, 5, 6], 4.1); // false