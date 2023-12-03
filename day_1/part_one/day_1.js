const fs = require('fs')
const readline = require('readline')
const filePath = '../input.txt'
const rl = readline.createInterface({
    input: fs.createReadStream(filePath),
    crlfDelay: Infinity,
})

let left = 0, right = 0;
let totalSum = 0;

rl.on('line', (line) => {
    let seenNums = []
    for (let char of line) {
        let numchar = Number(char);
        if (Number.isInteger(numchar)) seenNums.push(numchar)
    }

    left = seenNums[0];
    right = seenNums[seenNums.length - 1]

    totalSum += left * 10 + right;
    console.log(totalSum)

    // console.log(`${line}: Najbardziej z lewej: ${seenNums[0]}, z prawej: ${seenNums[seenNums.length - 1]} \n napotkane liczby: ${seenNums}`)
})

/*
Done!
*/

