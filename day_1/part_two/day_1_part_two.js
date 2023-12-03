const fs = require('fs')
const readline = require('readline')
const filePath = '../input.txt'
const rl = readline.createInterface({
    input: fs.createReadStream(filePath),

})

const wordToNumber = {
    one: 1,
    two: 2,
    three: 3,
    four: 4,
    five: 5,
    six: 6,
    seven: 7,
    eight: 8,
    nine: 9,
  };

let totalSum = 0;

rl.on('line', (line) => {
    let seenNums = []
    const pattern = /one|two|three|four|five|six|seven|eight|nine|\d+/gm;
  
    line.replace(pattern, (match) => {
      if (!isNaN(match)) {
        seenNums.push(...match.split('').map(Number));
    }
      else {
        seenNums.push(...wordToNumber[match].toString().split('').map(Number));
    }
  
      return match;
    })

    totalSum += (seenNums[0] * 10 + seenNums[seenNums.length - 1])
    console.log("\n\n\n* - * - * - *")
    console.log(line)
    console.log(seenNums)
    console.log(seenNums[0] * 10 + seenNums[seenNums.length - 1]
    )
    console.log(totalSum)    
    console.log("* - * - * - *")    
})
/*
Done!
*/

