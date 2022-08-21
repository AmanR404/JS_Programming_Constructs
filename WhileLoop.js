// Practice Problem 1

let i = 1;
while(i <= 11){
    console.log("Flipping Coin....\n");
    let coin = Math.floor(Math.random()*2);
    if(coin == 1){
        console.log("Heads");
        i++
    }
    else{
        console.log("Tails");
        i++
    }
}

// Practice Problem 2

let money = 100;
let totalBets = 0;
let timesWon = 0;

while(money != 0 || money != 200){
    let luckyNumber = Math.floor(Math.random()*2);
    if(luckyNumber == 1){
        console.log("You Won");
        money++;
        timesWon++;
        totalBets++;
    }
    else{
        console.log("You Lose");
        money--;
        totalBets++;
    }
}
console.log("Total Bets : ", totalBets);
console.log("No. of times Won :", timesWon);