const preferences = document.getElementById("preferences");
const bgColor = document.getElementById("background-color");
const textColor = document.getElementById("text-color");
const fontSize = document.getElementById("font-size");
const lineHeight = document.getElementById("line-height");
const fontName = document.getElementById("font-name");

let listBgColors = ["White","Black", "Silver", "SkyBlue", "DarkSlateGray", "NavajoWhite"];

let listTextColors = ["White", "Black", "Red", "Indigo", "SkyBlue", "Honeydew"];

let listFontSize = ["5px", "10px", "15px", "20px", "25px", "30px"];

let listLineHeight = ["3px", "6px", "9px", "12px", "15px", "18px"];

let listFontName = ["sans-serif", "serif", "fantasy", "cursive", "monospace"];

let listClassName = ["button-bgColor", "button-textColor", "button-fontSize", "button-lineHeight", "button-fontName"];



function createButton(list, element) {
    for (let index = 0; index < list.length; index += 1) {
        let listItem = list[index];
        let button = document.createElement("button");
        button.innerText = listItem;
        button.className = `button`;
        element.appendChild(button);
    }
}

createButton(listBgColors, bgColor);
createButton(listTextColors, textColor);
createButton(listFontSize, fontSize);
createButton(listLineHeight, lineHeight);
createButton(listFontName, fontName);

let bgColorButtons = document.querySelectorAll("#background-color button");

function setBackgroundColor(color) {
    let content = document.querySelector("#content");
    content.style.backgroundColor = color;
    localStorage.setItem("backgroundColor", color);
}

for (let index = 0; index < bgColorButtons.length; index += 1) {
    bgColorButtons[index].addEventListener("click", function(event) {
      setBackgroundColor(event.target.innerHTML);
    })
}

let textColorButtons = document.querySelectorAll("#text-color button");

function setTextColor(color) {
    let content = document.querySelector("#content");
    content.style.color = color;
    localStorage.setItem("textColor", color);
}

for (let index = 0; index < textColorButtons.length; index += 1) {
    textColorButtons[index].addEventListener("click", function(event) {
        setTextColor(event.target.innerHTML);
    })
}

let fontSizeButtons = document.querySelectorAll("#font-size button");

function setFontSize(size) {
    let content = document.querySelector("#content");
    content.style.fontSize = size;
    localStorage.setItem("fontSize", size);
}

for (let index = 0; index < fontSizeButtons.length; index += 1) {
    fontSizeButtons[index].addEventListener("click", function(event) {
        setFontSize(event.target.innerHTML);
    })
}

let fontButton = document.querySelectorAll("#font-name button");

function setFontStyle(font) {
    let paragraph = document.querySelector("#paragraph");
    paragraph.style.fontFamily = font
    localStorage.setItem("fontFamily", font);
}

for (let index = 0; index < fontButton.length; index += 1) {
    fontButton[index].addEventListener("click", function(event) {
        setFontStyle(event.target.innerHTML);
    })
}



function initialize() {
    let backgroundColor = localStorage.getItem("backgroundColor");
    if (backgroundColor) {
        setBackgroundColor(backgroundColor);
    }

    let textColor = localStorage.getItem("textColor");
    if (textColor) {
        setTextColor(textColor);
    }

    let fontSize = localStorage.getItem("fontSize");
    if (fontSize) {
        setFontSize(fontSize);
    }

    let fontFamily = localStorage.getItem("fontFamily");
    if (fontFamily) {
        setFontStyle(fontFamily);
    }
}

initialize()