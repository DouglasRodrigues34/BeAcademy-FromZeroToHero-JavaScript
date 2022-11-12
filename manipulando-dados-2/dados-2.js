//Manipulando String e Arrays
/*
Separando um texto que contem espaçõs, em um novo array onde
cada texto é uma posição do array
*/

let newPhrase = 'Fala meus queridos e queridas'
console.log(newPhrase)
let phraseToArray = newPhrase.split(' ')
console.log(phraseToArray)

//Convertendo novamente o texto para string
// .join (" ") -> Permite que eu gere separações

let phraseModify = phraseToArray.join(" ").toLowerCase()
console.log(phraseModify)

// Manipulando Strings e Arrays
// verificar se contém palavras ou letras

let stringInclude = "Veem ne mim Paylivre, pay pay"
console.log(stringInclude.includes('Paylivre'))

//Objetos

let arrayInclude = [
    "PayLivre",
    "Veem",
    "ne mim",
    "Meu amor",
    {
        firstname: "Pay",
        lastName: "Livre"
    }
]
console.log(arrayInclude.includes('Meu amor'))

//String startWith
console.log(stringInclude.startsWith('Ve'))

//String endstWith
console.log(stringInclude.endsWith('re'))

//Transformando um array em Caracteres
let wordToArray = 'Quem ta gostando dis Hey!!'
console.log(Array.from(wordToArray))