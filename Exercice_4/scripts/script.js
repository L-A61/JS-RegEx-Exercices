// Savoir si un mot de passe contient bien au moins 2 majuscules, 1 minuscule, 2 chiffres et un signe & ou # ou @, avec une longueur est de 8.

let input = document.getElementById("inputNb");
let inputBtn = document.getElementById("inputBtn")
let inputResult = document.getElementById("inputResult")

inputBtn.addEventListener("click", function() {
    if (/^$/.test(input.value)) {
        inputResult.innerText="Saisis: " + input.value + "\nCe mot de passe est valide"
    } else {
        inputResult.innerText="Saisis: " + input.value + "\nCe mot de passe n'est pas valide"
    }
})


// (.*[A-Z]{2,})
// (.*[a-z])
// (.*[0-9]{2,})
// (.*[&#@])