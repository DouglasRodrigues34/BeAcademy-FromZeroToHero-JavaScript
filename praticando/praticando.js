// 1. Declare uma variavel de nome person
var person

// 2. Que tipo de dado é a variavel acima?
console.log(typeof person)

// 3. Declare uma variavel e atribua valores para cada um dos dados.
/*
- name : string
- age : Number (integer)
- weight : Number (float)
- isAdmin : boolean
- isMan : boolean
*/

person = {
    name: "Douglas",
    age: 34,
    weight: 65,
    isAdmin: false,
    isMan: true
}

// 4. A Variavel human abaixo é de que tipo de dado ?

// 4.1 Atriubua a ela as mesmas propriedades e valores do exercico 3

// 4.2 Monstre no console a seguinte mensagem,:
//O humano < name > tem o peso < weight > kg.


// let human = {
//     name: "Douglas",
//     age: 34,
//     weight: 65,
//     isAdmin: false,
//     isMan: true,
// }
// console.log(`O humano ${human.name} tem o peso ${human.weight}`);

/*
5. Declare uma variavel do tipo Array, de nome humans e atribua a ela
nenhum valor, ou seja, somente o array vazio.
 */

// let humans []

/* 
6. Reatribua para a variavel acima, colocando dentro dela o objeto human
da questão 4. (Não copiar e colocar o objeto, mas usar o objeto criado
inserir ele no array)
*/

// let humans [
//     human
// ]

console.log(humans)

// 7. Coloque no console o valor da posição zero do Array acima 
console.log(human[0])

// 8. Crie um novo objeto human e coloque na posição 1 do Array humans
let newHuman = {
    name: "Douglas Rodrigues",
    age: 34,
    weight: 70,
    isAdmin: true,
    isMan: true,
}

    console.log(newHuman)

    humans = [
        human,
        newHuman
    ]

console.log(humans)
console.log(humans[1])

// a)
console.log(a)
var a = 1
//resposta? undefined


// b)
let a
console.log(a)
{
    let a = 2
    console.log(2)
}
console.log(a)

// c)
console.log(b)
{
    let b = 3
    console.log(b)
}
console.log(b)

// d)
const c = 10
{
    console.log(c)
    const c = 20
    console.log(c)
}