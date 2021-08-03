let units = [
    '',
    'one',
    'two',
    'three',
    'four',
    'five',
    'six',
    'seven',
    'eight',
    'nine',
    'ten',
    'eleven',
    'twelve',
    'thirteen',
    'fourteen',
    'fifteen',
    'sixteen',
    'seventeen',
    'eighteen',
    'nineteen'
]

let tens = [
    '',
    '',
    'twenty',
    'thirty',
    'forty',
    'fifty',
    'sixty',
    'seventy',
    'eighty',
    'ninety'
]

const createWord = (num) => {
    let word = "";

    if(num > 999) {
        word += units[Math.floor(num/1000)] + "thousand"
        if(num == 1000) {
            return word
        }
    }
    
    if(num > 99) {
        word += units[Math.floor(num/100)] + "hundred"
        if(num % 100 != 0) {
            word += 'and'
        }  
    }

    if(num < 20) {
        word += units[num]
    } else {
        if((num % 100)/10 == 1) {
            word += units[10]
        } else if(num % 10 == 0) {
            word += tens[(num % 100)/10]
        } else if(num % 100 > 10 && num % 100 < 20) {
            word += units[num % 100]
        } else {
            word += tens[Math.floor((num % 100)/10)]
            word += units[num % 10]
        }
    }

    return word
}

const numberLetterCounts = (limit) => {
    let count = 0;
    for(let i = 1; i <= limit; i++) {
        count += createWord(i).length
    }
    return count;
}

console.log(numberLetterCounts(5))
console.log(numberLetterCounts(150))
console.log(numberLetterCounts(1000))