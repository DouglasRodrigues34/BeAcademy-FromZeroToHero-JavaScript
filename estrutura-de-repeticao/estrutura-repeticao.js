// For

// for (let i = 10; i >= 1; 1--) {
//     console.log(i);
// }

// for (let i = 1; i <= 10; i++) {
//     if (i === 5) {
//         break
//         //continue
//     }
//     console.log(i)
// }

//While (Enquanto)
let interator = 1
while (interator <= 20) {
    console.log(interator)

    //incremento
    interator++
}

// FOR OF
//Array

let number = ['Maria', 'Pedro', 'João', 'Jenifer', 'Luan']
    // num = numbers (For Of)
    // For Of (Valores do Array)
for (num of number) {
    console.log(num)
}

// For in
let animals = {
    name: 'leão',
    weight: 200,
    age: 4
}

for (item in animals) {
    //Tipo 1 para capturar valores de objeto em um For in
    console.log(animals['age'])
    //Tipo 2 para capturar todo o objeto
    console.log(animals)
    //Tipo 3 mostra os valores dentro das propriedades
    console.log(animals[item])
    //Tipo 4 para capturar valores individuais  das propriedades de um objeto
    console.log(animals.name)
}

let arrayName = [
    'Jenifer',
    'Luan',
    'Regis',
    'Moacir'
]

for (item in arrayName) {
    //console.log(arrayName) // Mostra todo o Array
    //console.log(arrayName[item]) // Mostra todos os valores
    //console.log(arrayName[2]) // Mostra diretamente um vetor
    console.log(item) // Index dos vetores
}