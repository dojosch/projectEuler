const numOfDivisors = (n) => {
  let count = 0;

  for (let i = 1; i < Math.sqrt(n); i++) {
    count = n % i === 0 ? count += 2 : count
  }
    
  n % Math.sqrt(n) === 0 && count++

  return count;
}

const divisibleTriangleNumber = (n) => {
    let i = 1, triangleNumber = i;

    while (numOfDivisors(triangleNumber) < n) {
        i++;
        triangleNumber += i;
    }

    return triangleNumber;
}

console.log(divisibleTriangleNumber(5));
console.log(divisibleTriangleNumber(23));
console.log(divisibleTriangleNumber(167));
console.log(divisibleTriangleNumber(374));
console.log(divisibleTriangleNumber(500));