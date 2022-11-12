//Restaurante
function meuPratoDeComida(comida1, comida2, comida3, comida4) {
    return `Meu prato de comida é: ${comida1},${comida2},${comida3},${comida4}`
}

const prato = meuPratoDeComida('arroz', 'feijão', 'bife', 'batata frita')
console.log(prato)

//Arrow Function
const myFisrtArrowFunction = (number1, number2) => {
    let total = number1 + number2
    return total
}

const result = myFisrtArrowFunction(20,20)
console.log(result)