const countingSundays = (firstYear, lastYear) => {
    let counter = 0
    let weekday = 1

    // Start counting when everything was good (1. 1. 1900 was monday)
    for(let i = 1900; i <= lastYear; i++) {
        // Set month days
        let months = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
        
        // Set leap year month
        if(i % 4 == 0 && ((i % 100 != 0) || (i % 400 == 0))) {
            months[1] = 29
        }

        for(let j = 0; j < months.length; j++) {
            for(let k = 1; k <= months[j]; k++) {     
                if(i >= firstYear) {
                    if(k == 1 && weekday == 7) {
                        counter++
                    }
                }
                weekday = weekday < 7 ? weekday + 1 : 1
            }
        } 
    }
    return counter
}

console.log(countingSundays(1943, 1946))
console.log(countingSundays(1995, 2000))
console.log(countingSundays(1901, 2000))