const specialPythagoreanTriplet = (n) => {
    let triples = []
    for(let b = (n - 1); b > 0; b--) {
        for(let a = (n - 2); a > 0; a--) {
            let c = Math.sqrt( a ** 2 + b ** 2 )
            if(((a + b + c) == n) && (a < b) && (b < c)) {
                triples.push((a * b * c))
            }
        } 
    }
    return triples;
}

console.log(specialPythagoreanTriplet(24))
console.log(specialPythagoreanTriplet(120))
console.log(specialPythagoreanTriplet(1000))