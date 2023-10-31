function isSubsequence(str1, str2) {
    let i = 0;
    let j = 0;

    while (i < str1.length && j < str2.length) {
        
        if (str1[i] === str2[j]) {
            i++;
            // console.log('i', i, str1[i])
            // console.log('j', j, str2[j])
        }
        // console.log('j', j)
        j++;
        // console.log('j', j)
    }

    return i === str1.length;
}