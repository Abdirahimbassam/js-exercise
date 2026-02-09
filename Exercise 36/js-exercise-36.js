
const colorPicker = document.querySelector("#colorpicker");
const colorPreview = document.querySelector("#colorpreview");
const ColorHistory = document.querySelector("#Colorhistory");
const clearhistoryButton = document.querySelector("#clearhistorybutton");

colorPicker.addEventListener("input", function() {
    const SelectColor = colorPicker.value;
    colorPreview.style.backgroundColor = SelectColor;
    addColorToHistory(SelectColor)
    SaveColorToLocalStorage(SelectColor)
})

function addColorToHistory(color) {
    const li = document.createElement('li');
    li.textContent = color;
    li.style.color = color;
    ColorHistory.appendChild(li)
}

clearhistoryButton.addEventListener('click', function() {
    ColorHistory.innerHTML = '';
})

function SaveColorToLocalStorage(color) {
    const oldColor = JSON.parse(localStorage.getItem('colors')) || [];

    oldColor.push(color)

    localStorage.setItem('colors', JSON.stringify(oldColor))
}