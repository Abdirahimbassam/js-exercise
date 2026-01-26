
const coding = document.querySelector ('#coding');

console.log(coding);

function additem() {
    const newItem = document.createElement('li')
    newItem.textContent = "React"

    coding.appendChild(newItem)
}

function removeitem() {

    // coding.removeChild(coding.lastChild);

    // if i went to control i use if else statement
    if(coding.lastChild){
        coding.removeChild(coding.lastChild)
    } else {
        alert ("Not Working ")
    }
}
