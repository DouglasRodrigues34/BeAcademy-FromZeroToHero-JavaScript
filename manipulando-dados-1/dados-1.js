// Type Conversion

// Convertendo String para número e número para String
console.log(Number('9') + 24)
console.log(typeof String(9) + ' Converteuu diacho!!');

//Contar Caracteres
let onWord = "Douglas" //5 letras
console.log(onWord.length)

//Maiúscula e Minúscula
let phrase = 'Olha o bonde da PayLivre'
console.log(phrase.toUpperCase())
console.log(phrase.toLowerCase())

//Covertendo para inteiro
let decimalNumber = 32.8
console.log(parseInt(decimalNumber))


//Covertendo para Decimal
let integerNumber = 24
console.log(parseFloat(integerNumber))

//Trabalhar com casas decimais, números depois da virgula
let niceNumber = 24.988834224542
console.log(niceNumber.toFixed(4));
console.log(niceNumber.toFixed(4).replace('.', ','));

//Precisão Numérica
let otherNumber = 129 / 32
console.log(typeof Number(otherNumber.toPrecision()))