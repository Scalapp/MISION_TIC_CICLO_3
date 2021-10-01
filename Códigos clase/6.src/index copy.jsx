import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { App } from "./App"

const componente = (
  <div>
    <h1>Este es mi título 1 desde una variable llamada componente</h1>
    <h2>Este es mi título 2 </h2>
    <div>
      <h1>Este es mi título 3 desde el div</h1>
      <h2>Este es mi título 4 desde el div</h2>
    </div>
  </div>
)
function Fcomponente({ titulo, titulo2 }) {
  console.log("Estos son los atributos que recibe Fcomponente");
  //console.log(atrib);
  //const titulo =atrib.titulo;
  //const titulo2 =atrib.titulo2;
  //const {titulo, titulo2} =atrib; //desestructurar el objeto
  return <div>
    <h1>Este es mi {titulo} desde una funcion o componente</h1>
    <h2>Este es mi {titulo2} desde una funcion o componente</h2>
    <div>
      <h1>Este es mi título 3 desde el div</h1>
      <h2>{titulo2}{titulo2}{titulo2}{titulo2}</h2>
    </div>
  </div>
}

function Fcomponente2({ titulo, children }) {
  console.log("Estos son los atributos que recibe Fcomponente");

  return <div>
    <h1>Este es mi {titulo} desde una funcion o componente</h1>
    <h2>Este es mi:--- {children} :---desde una funcion o componente</h2>
  </div>
}


//ReactDOM.render(<Fcomponente2 titulo="un titulo diferente">esto es el contenido del componente</Fcomponente2>,document.getElementById('root'));
ReactDOM.render(<App />, document.getElementById('root'));

