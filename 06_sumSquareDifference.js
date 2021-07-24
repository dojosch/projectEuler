const sumSquareDifference = (num) => {
    let sumSquares = 0, squareSums = 0

    for(let i = 1; i <= num; i++) {
        sumSquares += i ** 2
        squareSums += i
    }

    return squareSums ** 2 - sumSquares
}


console.log(sumSquareDifference(10))
console.log(sumSquareDifference(20))
console.log(sumSquareDifference(100))