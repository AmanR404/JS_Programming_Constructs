// Math.random        0.1-1.0
// Math.random*10     0.1-1.0  X 10
// Math.floor         Gives round figure
// To get in range    Math.random()*20           (0-20)



// Practice Problem 1

let random = Math.floor(Math.random()*10);
console.log(random);

// Practice Problem 2

let dice = Math.floor(Math.random()*6);

// Practice Problem 3

let dice1 = Math.floor(Math.random()*6);
let dice2 = Math.floor(Math.random()*6);
console.log(dice1 + dice2);

// Practice Problem 4

let sum = 0;

for (let i = 0; i < 6;i++){
    sum = sum + Math.floor(Math.random()*89 + 10);
}
console.log(sum);
console.log(sum/5);
