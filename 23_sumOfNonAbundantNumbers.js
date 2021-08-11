const isAbundant = (n) => {
    let sum = 0;
    for(let i = 1; i <= Math.sqrt(n); i++) {
        if(n % i == 0) {
            if (n / i == i) {
                sum += i;
            } else {
                sum += i;
                sum += (n / i);
            }
        }
    }
    sum -= n;
    return sum > n
}

const sumOfNonAbundantNumbers = (n) => {
    let sum = 0
    for(let i = 0; i <= n; i++) {
        isPossible = false
        for(let j = 0; j <= (i - 12); j++) {
            if(isAbundant(j) && isAbundant(i - j)) {
                isPossible = true
                break
            }
        }
        if(!isPossible) {
            sum += i
        }
    }
    return sum
}

console.log(sumOfNonAbundantNumbers(10000))
console.log(sumOfNonAbundantNumbers(15000))
console.log(sumOfNonAbundantNumbers(20000))
console.log(sumOfNonAbundantNumbers(28123))