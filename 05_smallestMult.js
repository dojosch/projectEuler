const isDivisible = (factor, max) => {
    for(let i = 1; i <= max; i++) {
        if(factor % i !== 0) {
            return false
        } 
    }
    return true
}

const smallestMult = (num) => {
    let smallestMult = 1

    for(let i = 1; i <= num; i++) {
        smallestMult *= i
    }

    for(let k = 2; k < num; k++) {
        if(isDivisible((smallestMult / k), num)) {
            smallestMult /= k
            k--
        }
    } 

    return smallestMult;
}


console.log(smallestMult(5))
console.log(smallestMult(7))
console.log(smallestMult(10))
console.log(smallestMult(13))
console.log(smallestMult(20))
