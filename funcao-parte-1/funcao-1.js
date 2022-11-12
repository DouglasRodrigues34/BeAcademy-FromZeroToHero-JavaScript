// Exemplo 1


// Method
function myFirstFunction() {
    // Entra meu código
    console.log('Olha a função')
}

//Execute
myFirstFunction();


// Função com parâmetros e argumentos

//number1 = 32 e number2 = 24
function sum(number1, number2) {
    console.log(number1 + number2)
}
sum(32, 24)



//Função com Return
function myFirstFunctionWithReturn(num1, num2) {
    let total = num1 + num2
    return total
}

console.log(myFirstFunctionWithReturn(20,20));

// -> Total = 40