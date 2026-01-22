

function calculateArea (width, heigth = width) {
    return width * heigth;
}

// width = 5 , heigth = 10
console.log(calculateArea(5,10));

//  width = 4 , heigth = default = width
console.log(calculateArea(4));