// Practice Problem 1

let value = 11;

if(value%2 == 0 || value%3 == 0){
    console.log("Not a Prime number");
}
else{
    console.log("Prime number");
}

// Practice Problem 2

for(let i = 0; i<=12;i++){
    let number = Math.floor(Math.random()*12);

    if(number == 2 || number == 3){
        console.log(number , " is a Prime number");
    }
    else if(number%2 == 0 || number%3 == 0){
        console.log(number , " is not a Prime number");
    }
    else{
        console.log(number , " is a Prime number");
    }
}

// Practice Problem 3

let num = 5;
let factorial = 1;

for(let i = num;i > 0;i--){
    factorial = factorial * i;
}
console.log(factorial);