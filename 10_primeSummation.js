const primeSummation = (n) => {
    let count = 1, primeSum = 2
    
    while(count < n) {
        isPrime = false
        for(let i = 2; i < count; i++) {
            if(count % i != 0) {
                isPrime = true
            } else {
                isPrime = false
                break
            }
        }
        primeSum = isPrime ? primeSum + count : primeSum
        count += 2
    }

    return primeSum
}

console.log(primeSummation(17))
console.log(primeSummation(2001))
console.log(primeSummation(140759))
console.log(primeSummation(2000000))