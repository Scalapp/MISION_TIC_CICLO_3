function myFunction(elmnt, clr) {
    elmnt.style.color = clr;
}

function myFunction2(elmnt, clr) {
    elmnt.style.fontSize= clr;
}

function queElemento(elemento) {
    var targ;
    if (!elemento) {
        var elemento = window.event;
    }
    if (elemento.target) {
        targ = elemento.target;
    } else if (elemento.srcElement) {
        targ = elemento.srcElement;
    }
    var tname;
    tname = targ.tagName;
    alert("Usted seleccionó un elemento de tipo " + tname + " Gracias.");
}

function Coordenadas(e) {
    x = e.clientX;
    y = e.clientY;
    coor = "Las coordenadas son: (" + x + "," + y + ")";

    document.getElementById("párrafofinal").innerHTML = coor
}

function clearCoor() {
    document.getElementById("párrafofinal").innerHTML = "";
}