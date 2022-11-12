// Declarações

/*
var name
let name2
const name3 <- observação
*/

/*
name = "adksj"
name2 = "jkdjkj"
*/

/*
let name = "Douglas"
console.log(name)

name = 32
console.log(name)

name = ("Rodrigues")
console.log(name)
*/

/*
const name = "Luan"
console.log(name)
name = "Rodrigues" <- observação
*/

// Globais
// Hoisting -> var

/*
var name

console.log('Variável name existe aqui?', name)

{ // Scopo (bloco de código)
    // Local
    name = "Douglas"
}

console.log('Variável name existe aqui?', name)

*/

// Locais

let name = "Douglas"

console.log('Variável chegou aqui?', name)

{ // Scopo (bloco de código)
    // Local
    let name = "Jenifer"
    console.log('Variável chegou aqui?', name)
}

console.log('Variável chegou aqui?', name)