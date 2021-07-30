const sequenceLegth = (n) => {
    let count = 0;
    while(n != 1) {
        n = n % 2 == 0 ? n / 2 : 3 * n + 1
        count++
    }
    return count
}

const longestCollatzSequence = (limit) => {
    let longestSequenceNum = {
        sequenceLength: 0,
        sequenceNum: 0,
    }, tmpSequenceLegth = 0

    for(let i = 1; i < limit; i++) {
        tmpSequenceLegth = sequenceLegth(i)

        if(tmpSequenceLegth > longestSequenceNum.sequenceLength) {
            longestSequenceNum.sequenceLength = tmpSequenceLegth
            longestSequenceNum.sequenceNum = i
        }
    }

    return longestSequenceNum.sequenceNum

}

console.log(longestCollatzSequence(14))
console.log(longestCollatzSequence(5847))
console.log(longestCollatzSequence(46500))
console.log(longestCollatzSequence(54512))
console.log(longestCollatzSequence(100000))
console.log(longestCollatzSequence(1000000))