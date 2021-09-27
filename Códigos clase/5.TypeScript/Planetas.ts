let planeta2 = new Object();
let planeta3 = {};

interface Planeta {
    nombre: string;
    galaxia: string;
    numeroDeLunas: number;
    habitantes: number;
}

let planeta: Planeta = {
    nombre: "Tierra",
    galaxia: "Vía Lactea",
    numeroDeLunas: 1,
    habitantes: 784000000
}

console.log("El nombre de nuestro planeta es:" + planeta.nombre);
console.log("la Galaxia a la que pertenece es:" + planeta.galaxia);
console.log("El número de habitantes es:" + planeta["habitantes"]);
console.log("El número de lunas es:" + planeta.numeroDeLunas);

for (let caracteristica in planeta) {
    console.log("El planeta " + caracteristica + " : ");
    console.log(caracteristica.toString);
}

interface Person {
    firstName: string,
    lastName: string,
    sayHi: () => string,
    age: number
}

interface Musician extends Person {
    instrument: string
}

var drummer = <Musician>{};
drummer.age = 27
drummer.instrument = "Drums"
console.log("Age:  " + drummer.age)
console.log("Instrument:  " + drummer.instrument)

for (let drumm in drummer) {
    console.log("El planeta " + drumm + " : ");
    console.log(drumm.toString);
}