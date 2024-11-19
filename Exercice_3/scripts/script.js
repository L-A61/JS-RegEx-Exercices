// Savoir si une chaîne de caractères est un numéro de téléphone au format : 06 52 32 04 78 ou +33652320478

let input = prompt("Saisir un numéro de tel")

if (/^[0-9]{10,10}$/.test(input)) { // TODO: faire un regex qui saisis le deuxième format
    alert("Numéro valide")
} else {
    alert("Numéro non valide")
}