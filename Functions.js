// Practice Problem 1

var arguments = process.argv ;  

let number = arguments[2];

function checkPrime(number){
    if(number == 2 || number == 3){
        console.log(number, " is a Prime number");
    }
    else if(number%2 == 0 || number%3 == 0){
        console.log(number , " is not a Prime number");
    }
    else{
        console.log(number, " is a Prime number");
    }
}
let reverse = new Array[2];
function checkPalindrome(number){
        reverse(0) = number(1);
        reverse(1) = number(0);
        for(let i = 0; i < reverse.length;i++){
            console.log(reverse(i));
        }
}
checkPrime();
checkPalindrome();
   

checkPrime();


