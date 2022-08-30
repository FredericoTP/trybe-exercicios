const preferences = document.getElementById("preferences");
const bgColor = document.getElementById("background-color");
const textColor = document.getElementById("text-color");
const fontSize = document.getElementById("font-size");
const lineHeight = document.getElementById("line-height");
const fontName = document.getElementById("font-name");

let listBgColors = ["White","Black", "Silver", "SkyBlue", "DarkSlateGray", "NavajoWhite"];

let listTextColors = ["White", "Black", "Red", "Indigo", "SkyBlue", "Honeydew"];

let listFontSize = ["5px", "10px", "25px", "20px", "25px", "30px"];

let listLineHeight = ["3px", "6px", "9px", "12px", "15px", "18px"];

let listFontName = ["Arial", "Monaco", "Copperplate", "Times New Roman", "Lucida Handwriting"];

let listClassName = ["button-bgColor", "button-textColor", "button-fontSize", "button-lineHeight", "button-fontName"];



function createButton(list, element) {
    for (let index = 0; index < list.length; index += 1) {
        let listItem = list[index];
        let button = document.createElement("button");
        button.innerText = listItem;
        element.appendChild(button);
    }
}

createButton(listBgColors, bgColor);
createButton(listTextColors, textColor);
createButton(listFontSize, fontSize);
createButton(listLineHeight, lineHeight);
createButton(listFontName, fontName);

const buttons = document.querySelectorAll("button");

for (let index2 = 0; index2 < buttons.length; index2 += 1) {
    buttons[index2].className = "button";
}
