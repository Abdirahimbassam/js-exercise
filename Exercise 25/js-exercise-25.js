
// Spread Operator 

const number1 = [1,2,3,4];
const number2 = [...number1, 6,7,8,9,10];

console.log(number1);

console.log("-----------------------------");

console.log(number2);

console.log("-----------------------------");

// Rest Operator

function multiply(...number) {
    return number.reduce((total , multiply)=> total * multiply ,1);
}

console.log(multiply(20,10,9));

