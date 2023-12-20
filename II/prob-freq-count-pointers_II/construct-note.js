// add whatever parameters you deem necessary
function constructNote(message, letters) {

    let messageFreq = {}
    let lettersFreq = {}

    for (let char of message) {
        messageFreq[char] = messageFreq[char] ? messageFreq[char] + 1 : 1
    }

    for (let letter of letters) {
        lettersFreq[letter] = lettersFreq[letter] ? lettersFreq[letter] + 1 : 1
    }

    for (let char in messageFreq) {

        if (!lettersFreq[char] || messageFreq[char]>lettersFreq[char]) return false

    }

    return true

}


// constructNote('aa', 'abc') // false
// constructNote('abc', 'dcba') // true
// constructNote('aabbcc', 'bcabcaddff') // true
