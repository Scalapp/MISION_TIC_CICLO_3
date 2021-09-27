/**
 * 23 septiembre 2021
 * @author Diego Iván Oliveros Acosta
 * www.scalapp.co
 */
function suma(a, b) {
    return a + b;
}
console.log(suma(22, 85.2));
var Rombo = /** @class */ (function () {
    function Rombo(diagonalVertical, diagonalHorizontal) {
        this.diagonalVertical = diagonalVertical;
        this.diagonalHorizontal = diagonalHorizontal;
    }
    Rombo.prototype.calcularArea = function () {
        return this.diagonalHorizontal * this.diagonalVertical;
    };
    ;
    return Rombo;
}());
var unRombo = new Rombo(4, 5);
var resultado = unRombo.calcularArea();
console.log("EL área del Rombo es:" + resultado);
console.log("este es el atributo 1, horizontal:" + unRombo.diagonalHorizontal);
console.log("este es el atributo 2, vertical:" + unRombo.diagonalVertical);
