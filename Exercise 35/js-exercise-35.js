

function ChangeImage() {
    const image = document.querySelector('#image');

    const url = prompt("Please Enter The url link");

    image.setAttribute('src',url);

    const borderColor = prompt("Please Enter The border color");

    image.style.border = `20px solid ${borderColor}`;

    const width = prompt("Please Enter The width");

    image.style.width = `${width}px`

    const heigth = prompt("Please Enter The heigth");

    image.style.heigth = `${heigth}px`

    const borderRadius = prompt("Please Enter The border radius");

    image.style.borderRadius = `${borderRadius}`;

}




