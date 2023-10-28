// add whatever parameters you deem necessary
function calculateFreq(str) {
    
    let freq = new Map()
    for (let char of str) {
        if(freq.has(char)) {
            freq.set(char, freq.get(char) +1)
        } else {
            freq.set(char, 1)
        }
    }
    
    return freq
}

function constructNote(str1, str2) {

    const freq1 = calculateFreq(str1)
    const freq2 = calculateFreq(str2)
    
    for (let letter of freq1.keys()) {
        
        if (!freq2.has(letter)) return false

        if (freq2.get(letter) < freq1.get(letter)) return false
    }
    
    return true

}
