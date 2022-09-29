//Code your solutions in this file
//Write a function fiveToOneHundred that console logs all numbers from 5 to 100.

function fivetoOneHundred(){
    for(let i = 5; i <=100; i++){
        console.log(i)
        
    }
}
//console.log(fivetoOneHundred())



function multiplesOfThree(){
    for(let i = 3; i <= 100; i+=3){
        console.log(i)
    }
}
//console.log(multiplesOfThree())


function multiplesOfThreeOrFive(){
    for(let i = 3; i <=100; i++){
        if(i%3 === 0){
            console.log(i)
        } else if(i%5 === 0){
            console.log(i)
        }
    }
}
//console.log (multiplesOfThreeOrFive())

function untilNum(num) {
    for (let i = 1; i <= num; i++){
        //console.log(i)
    }
}
console.log(untilNum(5))
