const sumFactorialDigits = (n) => {
    let fact = BigInt(1)

    for(let i = 2; i <= n; i++) {   
        fact = fact * BigInt(i)
    }

    return fact
            .toString()
            .split('')
            .reduce(
                (acc, curr) => parseInt(acc) + parseInt(curr)
            )


}

console.log(sumFactorialDigits(10))
console.log(sumFactorialDigits(25))
console.log(sumFactorialDigits(50))
console.log(sumFactorialDigits(75))
console.log(sumFactorialDigits(100))