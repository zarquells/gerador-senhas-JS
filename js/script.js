// script para atualizar o elemento que exibe a quantidade de senhas
const slider = document.getElementById("rangeQuantity");
const rangeValue = document.getElementById("rangeValue");
    
slider.oninput = function quantityPwd() {
    rangeValue.textContent = this.value;
}

// script para atualizar o elemento que exibe o tamanho das senhas
const sliderWord = document.getElementById("rangeQuantityWord");
const rangeValueWord = document.getElementById("rangeValueWord");
    
sliderWord.oninput = function quantityWord() {
    rangeValueWord.textContent = this.value;
}

function generatePwd() {
    var quantity     = parseInt(document.getElementById("rangeQuantity").value);
    var quantityWord = parseInt(document.getElementById("rangeQuantityWord").value);
    var toUseCaps    = (document.getElementById("lettersCapsOn").checked);
    var toUseNumbers = (document.getElementById("numbersOn").checked);
    var toUseSymbols = (document.getElementById("symbolsOn").checked);

    var letters     = "abcdefghijklmnopqrstuvwxyz";
    if  (toUseCaps)    letters += letters.toUpperCase();
    if  (toUseNumbers) letters += "01234567890123456789";
    if  (toUseSymbols) letters  += "!@#$%&*()+=-*./";

    var passwords = [];
    for (let i = 0; i < quantity; i++) {
        var password = "";
        for (let j = 0; j < quantityWord; j++) {
            var index = Math.floor(Math.random() * letters.length);
            password += letters.charAt(index);
        }
        passwords.push(password);
    }

    document.getElementById("passwords").innerHTML = passwords.join(" <br>");
}