/**
 * 23 septiembre 2021
 * @author Diego Iván Oliveros Acosta
 * www.scalapp.co
 */
 let areatotal2 : number = 8;
 var texto1: string = "El área de la figura es: ";
 var estavivo: boolean = false; //no se puede usar 1. 
 
 function calcularArea(lado: number): void {
    console.log(lado * lado);
 }
 calcularArea1(5);
 
 function imprimirArea2(lado: number, text: string): void {
     console.log(text + lado * lado);
 }
 
 if (estavivo) {
     imprimirArea(areatotal, texto1);
 }
 else {
     calcularArea1(areatotal);
 }
 