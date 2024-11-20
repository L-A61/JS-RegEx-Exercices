// Savoir si une chaîne de caractères est un numéro de téléphone au format : 06 52 32 04 78 ou +33 6 52 32 04 78

let input = document.getElementById("inputNb");
let inputBtn = document.getElementById("inputBtn")
let inputResult = document.getElementById("inputResult")

inputBtn.addEventListener("click", function() {
    if (/^(\s?[0-9]){10,10}$/.test(input.value)) {
        inputResult.innerText="Numéro saisis: " + input.value + "\nNuméro valide!"
    } else if (/^[+]?[3]{2,}(\s?[0-9]){9,9}$/.test(input.value)) {
        inputResult.innerText="Numéro saisis: " + input.value + "\nNuméro valide!"
    } else {
        inputResult.innerText="Numéro saisis: " + input.value + "\nNuméro non valide!"
    }
})

