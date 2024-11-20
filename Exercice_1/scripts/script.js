// Savoir si une chaîne de caractères est une couleur hexadécimale ou non.

let input = document.getElementById("inputNb");
let inputBtn = document.getElementById("inputBtn")
let inputResult = document.getElementById("inputResult")

inputBtn.addEventListener("click", function() {
    if (/^[#]{1,1}[a-zA-Z0-9]{6,6}$/.test(input.value)) {
        inputResult.innerText="Saisis: " + input.value + "\nC'est une couleur hexadécimale!"
    } else {
        inputResult.innerText="Saisis: " + input.value + "\nCe n'est pas une couleur hexadécimale!"
    }
})