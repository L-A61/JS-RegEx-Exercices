// Savoir si une chaîne de caractères est un mail valide (TLD de 2 à 6 caractères)

let input = document.getElementById("inputNb");
let inputBtn = document.getElementById("inputBtn")
let inputResult = document.getElementById("inputResult")

inputBtn.addEventListener("click", function() {
    if (/^(.?[a-zA-Z0-9]){1,64}[@]{1,1}[a-zA-Z0-9]{1,248}[.]{1,1}[a-z]{2,6}$/.test(input.value)) {
        inputResult.innerText="Saisis: " + input.value + "\nCe mail est valide"
    } else {
        inputResult.innerText="Saisis: " + input.value + "\nCe mail n'est pas valide"
    }
})