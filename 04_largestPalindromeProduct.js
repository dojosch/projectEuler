// Faster version

const isPalindrome = (num) => {
    // Parse Number into array
    let digitsArr = (""+num).split("")
    let isPalindrome = false

    // Remove middle of Array
    digitsArr.length % 2 !== 0 && digitsArr.splice(Math.floor(digitsArr.length / 2), 1)

    //Check if Array is Palindrome
    for(let i = 0; i < digitsArr.length / 2; i++) {
        if(digitsArr[i] == digitsArr[digitsArr.length - 1 - i]) {
            isPalindrome = true
        } else {
            isPalindrome = false
            return isPalindrome
        }
    }
    return isPalindrome
}

const largestPalindromeProduct = (digits) => {
    const largestNum = 10 ** digits - 1
    const smallestNum = 10 ** (digits - 1)
    let largestPalindrome = -1

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