const fs = require('fs')
const readline = require('readline');


const rl = readline.createInterface({
    input: fs.createReadStream("../input.txt")
})

const MAX_RED = 12 
const MAX_GREEN = 13
const MAX_BLUE = 14
let totalSum = 0

rl.on('line', (line) => {
    const gameId = line.split(":")[0].split(" ")[1]
    const cubes = line.split(": ")[1];
    const rolls = cubes.split("; ")
    const rll = rolls.map((roll) => roll.split(", "))
    console.log("* * * * *")
    console.log(rll)
    let possible = true;
    rll.forEach((el) => {
        el.forEach((ell) => {
            const elAr =  ell.split(" ")
            if (elAr[1] === "red" && elAr[0] > MAX_RED){
                possible = false;
            }
            if (elAr[1] === "blue" && elAr[0] > MAX_BLUE){
                possible = false
            }
            if (elAr[1] === "green" && elAr[0] > MAX_GREEN){
                possible = false;
            }
        })
    })
    if (possible) totalSum += Number(gameId)
    console.log(`Game is ${possible ? "possible" : "not possible"} !`)
    console.log(totalSum)
})

