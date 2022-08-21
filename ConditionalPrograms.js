// Practice Problem 1

let min = 0;
let max = 0;

for(let i = 0;i < 6;i++){
    let result = Math.floor(Math.random()*899 + 100);
    min = result;
    if(result > max){
        max = result;
    }
    else if(result < min){
        min = result;
    }
}
console.log("Maximum value is " , max);
console.log("Minimum  value is : ", min);

// Practice Problem 2

let coin = Math.floor(Math.random()*2);
console.log("Flipping coin...");
if(coin == 1){
    console.log("Heads");
}
else{
    console.log("Tails");
}

// Practice Problem 3

let num = 3;

if(num == 1){ console.log("One");}
else if(num == 2){ console.log("Two");}
else if(num == 3){ console.log("Three");}
else if(num == 4){ console.log("Four");}
else if(num == 5){ console.log("Five");}
else if(num == 6){ console.log("Six");}
else if(num == 7){ console.log("Seven");}
else if(num == 8){ console.log("Eight");}
else if(num == 9){ console.log("Nine");}