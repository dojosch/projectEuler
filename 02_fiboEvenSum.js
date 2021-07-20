const fiboEvenSum = (n) => {
    let sum = 0, f1 = 0, f2 = 1, tmp     
    do {
        tmp = f1 + f2
        f1 = f2
        f2 = tmp
        sum = f2 % 2 == 0 ? sum + f2 : sum
    } while(f2 < n)
    return sum
}

console.log(fiboEvenSum(10))
console.log(fiboEvenSum(34))
console.log(fiboEvenSum(60))
console.log(fiboEvenSum(1000))
console.log(fiboEvenSum(100000))
console.log(fiboEvenSum(4000000))