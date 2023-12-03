const fs = require('fs')
const readline = require('readline')
const filePath = '../input.txt'
const rl = readline.createInterface({
    input: fs.createReadStream(filePath),
    crlfDelay: Infinity,
})

let totalSum = 0;

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


  let left = 0, right = 0;

  let seenNums = []
  let seenWords = []
  // const lineArr = line.split(/(\D+|\d+)/).filter(Boolean)
  // const lineArrToNums = lineArr.map((item) => {
  //     if (Number(item) || item in wordToNumber) return item
  // }).filter(Boolean);
  // console.log(lineArrToNums)
  let word = "";
  let line = "seven7six98tjjtwotwo"
  for (let i = 0; i < line.length; i++) {
      if (Number(line[i])) {
          seenNums.push(line[i]);
      } 
      else {
          word += line[i];
          console.log(word)
          if (wordToNumber[word]) {
              seenNums.push(wordToNumber[word])
              word = ""
          }
      }
  }
  
  console.log("***")
  console.log(line)
  console.log(seenNums)
  console.log("***")


const str = "3nine1two44three98oops"
const strasnum = str.split(/(\D+|\d+)/).filter(Boolean)
const strtonum = strasnum.map((str) => str in wordToNumber ? wordToNumber[str] : "").filter(Boolean)
rl.on('line', (line) => {
    // let left = 0, right = 0;

    // let seenNums = []
    // let seenWords = []
    // // const lineArr = line.split(/(\D+|\d+)/).filter(Boolean)
    // // const lineArrToNums = lineArr.map((item) => {
    // //     if (Number(item) || item in wordToNumber) return item
    // // }).filter(Boolean);
    // // console.log(lineArrToNums)
    // let word = "";
    // for (let i = 0; i < line.length; i++) {
    //     if (Number(line[i])) {
    //         seenNums.push(line[i]);
            
    //     } else {
    //         word += line[i];
    //         console.log(word)
    //         if (wordToNumber[word]) {
    //             seenNums.push(wordToNumber[word])
    //         };
            
    //     }
    // }
    
    // console.log("***")
    // console.log(line)
    // console.log(seenNums)
    // console.log("***")

    // for (let char of line) {
    //     let numchar = Number(char);
    //     if (Number.isInteger(numchar)) seenNums.push(numchar)
    // }

    // left = seenNums[0];
    // right = seenNums[seenNums.length - 1]

    // totalSum += left * 10 + right;
    // console.log(totalSum)
    // const numbers = line.match(/\b(?:\d+|(?:one|two|three|four|five|six|seven|eight|nine|ten))\b/gi)
    // console.log(numbers)

    // console.log(`${line}: Najbardziej z lewej: ${seenNums[0]}, z prawej: ${seenNums[seenNums.length - 1]} \n napotkane liczby: ${seenNums}`)
})

/*
Done!
*/

