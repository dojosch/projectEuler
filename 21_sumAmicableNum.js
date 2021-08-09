const d = (n) => {
    let sum = 0

    for(let i = 0; i < n; i++) {
        sum = n % i == 0 ? sum + i : sum
    }

    return sum
} 

const sumAmicableNum = (n) => {
    let amigos = []

    for(let i = 1; i < n; i++) {  
        let tmp = d(i)
        let tmp2 = d(tmp)

        if(tmp2 == i && i != tmp) {
            amigos.push(i, tmp)
        }
    }
    return amigos
            .filter((v, i, a) => a.indexOf(v) === i)
            .reduce(
                (acc, curr) => parseInt(acc) + parseInt(curr)
            )
}

console.log(sumAmicableNum(1000))
console.log(sumAmicableNum(2000))
console.log(sumAmicableNum(5000))
console.log(sumAmicableNum(10000))