
function morning(a,b,callbac) {
    return callbac(a,b)
}

// addition

function add(a,b){
    return a + b;
}

console.log("Addition = " , morning(14,7,add));

// substraction

function substract (a,b) {
    return a - b;
}

console.log("Substraction = " , morning(14,7,substract));

console.log("------------------------------");

// Multiply

function Multiply (a,b) {
    return a * b ;
}

console.log("Multiply = " , morning(14,7,Multiply));

// division

function division (a,b) {
    return a / b ;
}

console.log("Divison = " , morning(14,7,division));