const nthPrime = (n) => {
    let count = 1, primArr = [1]
    
    while(primArr.length <= n - 1) {
        isPrime = false
        for(let i = 2; i < count; i++) {
            if(count % i != 0) {
                isPrime = true
            } else {
                isPrime = false
                break
            }
        }
        isPrime && primArr.push(count)
        count += 2
    }

    return primArr.pop()
}

console.log(nthPrime(6))
console.log(nthPrime(10))
console.log(nthPrime(100))
console.log(nthPrime(1000))
console.log(nthPrime(10001))