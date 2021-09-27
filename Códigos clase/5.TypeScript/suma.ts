/**
 * 23 septiembre 2021
 * @author Diego Iván Oliveros Acosta
 * www.scalapp.co
 */
function suma(a: number, b: number) :number{
    return  a + b;
}
console.log(suma(22, 85.2));


class Rombo {
    diagonalVertical:number;
    diagonalHorizontal:number;
    calcularArea():number{
      return this.diagonalHorizontal*this.diagonalVertical;
  
    };
    constructor (diagonalVertical:number, diagonalHorizontal:number){
      this.diagonalVertical=diagonalVertical;
      this.diagonalHorizontal=diagonalHorizontal;
  
    }}

  
  var unRombo = new Rombo(4, 5);
  var resultado = unRombo.calcularArea();
  console.log("EL área del Rombo es:"+resultado);
  console.log("este es el atributo 1, horizontal:"+unRombo.diagonalHorizontal)
  console.log("este es el atributo 2, vertical:"+unRombo.diagonalVertical)



    