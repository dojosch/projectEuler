const test1 = ['THIS', 'IS', 'ONLY', 'A', 'TEST']
const test2 = ['I', 'REPEAT', 'THIS', 'IS', 'ONLY', 'A', 'TEST']
const alphabet = ['', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']

const namesScores = (arr) => {
    arr.sort()
    let sum = 0
    arr.forEach((e, i) => {
        let tmpArr = e.split('')
        let tmpSum = 0;
        tmpArr.forEach(f => {
            tmpSum += (alphabet.indexOf(f))
        })
        sum += (tmpSum * (i + 1))
    });
    return sum 
}

console.log(namesScores(test1));
console.log(namesScores(test2));
// console.log(namesScores(names));