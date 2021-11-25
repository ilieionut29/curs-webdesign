const text = document.querySelector('.mainText');
const mainContainer = document.querySelector('.container');
const draw = document.getElementById('draw');
const context = draw.getContext('2d');

var changeColorBtn = document.getElementById("changeColorBtn");
var changeBtn = document.getElementById("changeButton");
var isDrawing = false;
var x = 0;
var y = 0;

function getRandomColor() {
    var letters = "0123456789ABCDEF".split('');
    var color = "#";

    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function changeColor() {
    document.body.style.backgroundColor = getRandomColor();
}

function changeBtnClass() {
    changeBtn = document.getElementById("changeButton");
    changeBtn.classList.add("btn1");

    if (changeBtn.classList == "btn1") {
        changeBtn.classList.remove("btn1");
        changeBtn.classList.add("btn2");
    } else {
        changeBtn.classList.remove("btn2");
        changeBtn.classList.add("btn1");
    }
}

function runEvent(e) {
    e.preventDefault();
    text.textContent = `MouseX: ${e.offsetX},  MouseY: ${e.offsetY}`;
}

function drawLine(context, x1, y1, x2, y2) {
    context.beginPath();
    context.strokeStyle = 'black';
    context.lineWidth = 1;
    context.moveTo(x1, y1);
    context.lineTo(x2, y2);
    context.stroke();
    context.closePath();
}

draw.addEventListener('mousedown', e => {
    x = e.offsetX;
    y = e.offsetY;
    isDrawing = true;
});

draw.addEventListener('mousemove', e => {
    if (isDrawing === true) {
        drawLine(context, x, y, e.offsetX, e.offsetY);
        x = e.offsetX;
        y = e.offsetY;
    }
});

window.addEventListener('mouseup', e => {
    if (isDrawing === true) {
        drawLine(context, x, y, e.offsetX, e.offsetY);
        x = 0;
        y = 0;
        isDrawing = false;
    }
});

changeColorBtn.addEventListener("click", changeColor);
changeBtn.addEventListener("click", changeBtnClass);
mainContainer.addEventListener("mousemove", runEvent);
