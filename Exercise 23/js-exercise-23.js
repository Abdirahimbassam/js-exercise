
const car = { make: "Toyota", model: "Corolla", year: 2020 };

// sida hore aqaanay ee object loo dabaco

console.log(car);

console.log("-----------------");

// hal hal sida logu waco

console.log(car.make);
console.log(car.model);
console.log(car.year);

console.log("-----------------");

// object destructuring

const {make , model} = car;

console.log(make);
console.log(model);