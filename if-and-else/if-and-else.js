// If and Else
// Se e Se Não

let num = 10
let num2 = 20
let isAdmin = true

// > < == === != !==
// && (AND) || (OR) ! (NOT)

if (num < 10) {
    console.log('Sou maior que 5')
} else if (num < 10 && num2 == 20) {
    console.log('Segunda resposta verdade')
} else {
    console.log('Resposta falsa')
}

//Switch
let myExpression = 'x'

switch (myExpression) {
    case 'a':
        console.log('Apertou o A')
        break
    case 'b':
        console.log('Apertou o B')
        break
    case 'c':
        console.log('Apertou o C')
        break
    default:
        console.log('Você apertou outra tecla', myExpression)
        break
}

//Calculadora
function calc(num1, operator, num2) {
    let result

    switch (operator) {
        case '+':
            result = num1 + num2
            break

        case '-':
            result = num1 - num2
            break

        case '*':
            result = num1 * num2
            break

        case '/':
            result = num1 / num2
            break

        default:
            console.log('Não entendi')
            break
    }

    return result
}

console.log(calc(15, '+' , 7))