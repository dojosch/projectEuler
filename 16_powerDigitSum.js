const powerDigitSum = (exponent) => {
    return BigInt(2 ** exponent)
            .toString()
            .split('')
            .reduce(
                (acc, curr) => parseInt(acc) + parseInt(curr)
            )
}

console.log(powerDigitSum(15))
console.log(powerDigitSum(128))
console.log(powerDigitSum(1000))