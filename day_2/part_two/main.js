const fs = require('fs')
const readline = require('readline');


const rl = readline.createInterface({
    input: fs.createReadStream("../input.txt")
})

let totalSum = 0

rl.on('line', (line) => {
    const cubes = line.split(": ")[1];
    const rolls = cubes.split("; ")
    const rll = rolls.map((roll) => roll.split(", "))

    let minRed = 0;
    let minBlue = 0;
    let minGreen = 0;

    console.log("* * * * *")
    console.log(rll)
    rll.forEach((el) => {
        el.forEach((ell) => {
            const elAr =  ell.split(" ")
            const colNumber = Number(elAr[0])
            if (elAr[1] === "red" && colNumber > minRed){
                minRed = colNumber            
            }
            if (elAr[1] === "blue" && colNumber > minBlue){
                minBlue = colNumber
            }
            if (elAr[1] === "green" && colNumber > minGreen){
                minGreen = colNumber     
            }
        })
        console.log(`red: ${minRed} - blue: ${minBlue} - green: ${minGreen}`)
    })
    const power = minRed * minBlue * minGreen
    totalSum+=power;
    console.log(totalSum)
    console.log("* * * * *")
})

