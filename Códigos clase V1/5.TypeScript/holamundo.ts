   
/**
 * 23 septiembre 2021
 * @author Diego Iván Oliveros Acosta
 * www.scalapp.co
 */
let areatotal : number = 8;
const uncolor : number = 0xff00;
const binario : number = 0b00110011;
var texto1: string = "El área de la figura es: ";
var estavivo: boolean = true; //no se puede usar 1. 
let talento: string[] = ["java", "python", "html", "css", "javascript", "typescript"];


console.log("Hola Mundo!");
function add(number1: number, number2: number): number {
    return number1 + number2;
}

console.log(add(2, 2));
console.log(add(2, 3));

function calcularArea1(lado: number): void {
    console.log(lado * lado);
}
calcularArea1(5);

function imprimirArea(lado: number, text: string): void {
    console.log(text + lado * lado);
}

if (estavivo) {
    imprimirArea(areatotal, texto1);
}
else {
    calcularArea1(areatotal);
}


var empleado:
    {
        nombre: String,
        edad: number
    } = {
    nombre: "Juan",
    edad: 20
}

for (const talent of talento) {
    console.log(talent);
}

var numberArray: number[] = [123, 123, 1213, 1231];
enum ROLE { Employee, Manager, Admin, Developer };
function functionsetName(name: string): void {
}

function functionhello(): void {
}
function functionsetName2(name: string, surName: string): string {
    return "string";
}

enum colores { rojo, verde, azul, amarillo };

const preferencias = {
    tamañoLetra: 14,
    fontfamily: "Times New Roman",
    color: colores.amarillo
}

if (preferencias.color === colores.amarillo) {
    console.log("el color es amarillo")
}

const number: any = "0.01 "; // no l o puedes hacer con string "0.01", no se recomienda num 
const number2: number = 0.01;
