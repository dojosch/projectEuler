const largestPrimeFactor = (num) => {
    let i = 2;
    while (i <= num){
        num % i == 0 ? num /= i : i++;
    }
    return i;
}

console.log(largestPrimeFactor(2))
console.log(largestPrimeFactor(3))
console.log(largestPrimeFactor(5))
console.log(largestPrimeFactor(7))
console.log(largestPrimeFactor(8))
console.log(largestPrimeFactor(13195))
console.log(largestPrimeFactor(600851475143))