// add whatever parameters you deem necessary
function sameFrequency(num1, num2) {

    let digits_num1 = num1.toString()
    let digits_num2 = num2.toString()

    let numFreq_1 = calculateFreq(digits_num1)
    let numFreq_2 = calculateFreq(digits_num2)

    for (let digit in numFreq_1) {
        if(numFreq_1[digit] !== numFreq_2[digit]) return false
    }
    return true
}

function calculateFreq (digits) {
    let freq = {}
    for (let digit of digits) {
        freq[digit] = freq[digit] ?  freq[digit] + 1 : 1
    }

    return freq
}