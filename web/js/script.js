var options = [
    firstSet = ['Mere', 'Banane', 'Bomboane']
];

var calculateBtn = document.getElementById("calculate");
var generateRandomNumberBtn = document.getElementById("generate");

function updateTime() {
    var currentdate = new Date();
    var datetime = currentdate.getDate() + "/"
        + (currentdate.getMonth() + 1) + "/"
        + currentdate.getFullYear() + " | "
        + currentdate.getHours() + ":"
        + currentdate.getMinutes() + ":"
        + currentdate.getSeconds();

    document.getElementById('dateLabel').innerHTML = datetime;

    setTimeout(updateTime, 1000);
}

function calculator() {
    console.log("test");
    var firstNumber = document.getElementById("firstNumber").value,
        secondNumber = document.getElementById("secondNumber").value,
        miniResult = document.getElementById("miniResult");

    if (firstNumber == "" || secondNumber == "") {
        alert("Adaugati numere in ambele campuri");
    } else {
        miniResult.innerHTML = parseInt(firstNumber) + parseInt(secondNumber);
    }

}

function randomNumber() {
    var randomNumberLabel = document.getElementById("randonNumber");
    var randomNumber = Math.floor(Math.random() * 26);
    randomNumberLabel.innerHTML = randomNumber;
}

function makeUL(array) {
    var list = document.createElement('ul');
    for (var i = 0; i < array.length; i++) {
        var item = document.createElement('li');
        item.appendChild(document.createTextNode(array[i]));
        list.appendChild(item);
    }
    return list;
}

updateTime();
calculateBtn.addEventListener("click", calculator)
generateRandomNumberBtn.addEventListener("click", randomNumber);
document.getElementById("generateList").addEventListener("click", function () {
    document.getElementById('list').appendChild(makeUL(options[0]));
})
