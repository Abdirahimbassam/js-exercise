
// Blocking Code = Synchronous

function Synchronous() {
    alert ("This is an alert");
    return {id: "EE201", name: "Ali Farah", city: "Benadir"};
}

console.log("This is fetch");

const user = Synchronous();

console.log("fetch data", user);

console.log("this is a synchronous code");


// Non-Blocking Code = ASynchronous

function Asynchronous(callback) {
    setTimeout ( ()=>{
        const user = { id: "EE201", name: "Ali Farah", city: "Benadir" } 
        callback(user);
    },2000 )
}

console.log("This is Asynchronous code");

Asynchronous(function(user) {
    console.log(user)
});

console.log("This is final message")