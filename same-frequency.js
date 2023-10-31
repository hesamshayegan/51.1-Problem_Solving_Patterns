function makeFreqNum(num) {
    const strNum = num.toString();
    const freqNum = {};

    for (const digit of strNum) {
        if (freqNum[digit]) {
            freqNum[digit] += 1;
        } else {
            freqNum[digit] = 1;
        }
    }

    return freqNum;
}

function sameFrequency(num1, num2) {
    const freqNum1 = makeFreqNum(num1);
    const freqNum2 = makeFreqNum(num2);

    for (const key in freqNum1) {
        if (freqNum1[key] !== freqNum2[key]) return false

        if (freqNum1[key] == freqNum2[key]) return true
    }

}


