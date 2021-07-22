// Less LoC Version

const isPalindrome = (num) => {
    // Parse Number into array
    let digitsArr = (""+num).split("")
    let digitsArrReverse = [...digitsArr].reverse()
    return digitsArr.toString() == digitsArrReverse.toString()
}

const largestPalindromeProduct = (digits) => {
    const largestNum = 10 ** digits - 1
    const smallestNum = 10 ** (digits - 1)
    let largestPalindrome = 0
    for(let i = largestNum; i > smallestNum; i--) {
        if ( largestPalindrome >= i * largestNum ) { 
            break;
        }
        for(let j = largestNum; j > smallestNum; j--) {
            if(isPalindrome(i * j) && (i * j) > largestPalindrome) {
                largestPalindrome = i * j
            }
        }
    }
    return largestPalindrome
}

console.log(largestPalindromeProduct(2))
console.log(largestPalindromeProduct(3))