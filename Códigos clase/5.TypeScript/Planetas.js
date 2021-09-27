var planeta2 = new Object();
var planeta3 = {};
var planeta = {
    nombre: "Tierra",
    galaxia: "Vía Lactea",
    numeroDeLunas: 1,
    habitantes: 784000000
};
console.log("El nombre de nuestro planeta es:" + planeta.nombre);
console.log("la Galaxia a la que pertenece es:" + planeta.galaxia);
console.log("El número de habitantes es:" + planeta["habitantes"]);
console.log("El número de lunas es:" + planeta.numeroDeLunas);
for (var caracteristica in planeta) {
    console.log("El planeta " + caracteristica + " : ");
    console.log(caracteristica.toString);
}
var drummer = {};
drummer.age = 27;
drummer.instrument = "Drums";
console.log("Age:  " + drummer.age);
console.log("Instrument:  " + drummer.instrument);
for (var drumm in drummer) {
    console.log("El planeta " + drumm + " : ");
    console.log(drumm.toString);
}
