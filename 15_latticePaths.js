const fact = (num) => {
    let rval = 1;
    for (let i = 2; i <= num; i++) {
        rval*= i;
    }     
    return rval;
}

const latticePaths = (n) => {
    return fact((2*n))/(fact(n) * fact(n))
}

console.log(latticePaths(4))
console.log(latticePaths(9))
console.log(latticePaths(20))