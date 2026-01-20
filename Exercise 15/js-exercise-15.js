
const people = [

    { name: "Ali", age: 20, city: "New-york" },

    { name: "Farah", age: 25, city: "London" },

    { name: "Mohamed", age: 30, city: "Dublin" }

];

console.log("Properties and values of each person:");

// console.log(people)

// combination of for of loop & for in loop

for (let peoples of people) {

    for (let key in peoples) {
        
     console.log(key + ": " + peoples[key]);

    }

    console.log("---")
    
}


