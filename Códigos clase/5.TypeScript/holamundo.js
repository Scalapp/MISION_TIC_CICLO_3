/**
 * 23 septiembre 2021
 * @author Diego Iván Oliveros Acosta
 * www.scalapp.co
 */
var areatotal = 8;
var uncolor = 0xff00;
var binario = 51;
var texto1 = "El área de la figura es: ";
var estavivo = true; //no se puede usar 1. 
var talento = ["java", "python", "html", "css", "javascript", "typescript"];
console.log("Hola Mundo!");
function add(number1, number2) {
    return number1 + number2;
}
console.log(add(2, 2));
console.log(add(2, 3));
function calcularArea1(lado) {
    console.log(lado * lado);
}
calcularArea1(5);
function imprimirArea(lado, text) {
    console.log(text + lado * lado);
}
if (estavivo) {
    imprimirArea(areatotal, texto1);
}
else {
    calcularArea1(areatotal);
}
var empleado = {
    nombre: "Juan",
    edad: 20
};
for (var _i = 0, talento_1 = talento; _i < talento_1.length; _i++) {
    var talent = talento_1[_i];
    console.log(talent);
}
var numberArray = [123, 123, 1213, 1231];
var ROLE;
(function (ROLE) {
    ROLE[ROLE["Employee"] = 0] = "Employee";
    ROLE[ROLE["Manager"] = 1] = "Manager";
    ROLE[ROLE["Admin"] = 2] = "Admin";
    ROLE[ROLE["Developer"] = 3] = "Developer";
})(ROLE || (ROLE = {}));
;
function functionsetName(name) {
}
function functionhello() {
}
function functionsetName2(name, surName) {
    return "string";
}
var colores;
(function (colores) {
    colores[colores["rojo"] = 0] = "rojo";
    colores[colores["verde"] = 1] = "verde";
    colores[colores["azul"] = 2] = "azul";
    colores[colores["amarillo"] = 3] = "amarillo";
})(colores || (colores = {}));
;
var preferencias = {
    tamañoLetra: 14,
    fontfamily: "Times New Roman",
    color: colores.amarillo
};
if (preferencias.color === colores.amarillo) {
    console.log("el color es amarillo");
}
var number = "0.01 "; // no l o puedes hacer con string "0.01", no se recomienda num 
var number2 = 0.01;
