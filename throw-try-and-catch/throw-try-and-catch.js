// Throw and Try Catch

//Saber minha idade
function myAge(myage) {
    if (!myage) {
        throw 'Você precisa colocar a idade!'
    }

    console.log('Eu executei depois do erro!')
}

try {
    myAge(34)
    console.log('Já tratei e deu erro')
} catch (error) {
    console.log(error)
}

console.log('Programa continua')