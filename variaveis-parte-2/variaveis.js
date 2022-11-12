// Declarar
//Objetos

const human = {
    name: "Douglas Rodrigues",
    age: 34,
    weight: 70,
    isAthlete: true,
    walk: function walking() {
        console.log('Eu ando bastante!')
    }
} // Objeto

/*
console.log(human.age)
console.log(human.name)
console.log(human.walk())
*/

// Concatenar
console.log("O humano" + human.name + " tem a idade " + human.age)

// Interpolação
console.log(`O humano ${human.name} tem idade ${human.age}`)

// Array

const animals = [
    "Elefante", // 0
    "Gato", // 1
    "Leão", // 2
    "Cachorro", // 3
    { // 4
        name: "Moacir",
        age: 2,
        weight: 4
    }
]
// tamanho 5

console.log(animals[4].age)