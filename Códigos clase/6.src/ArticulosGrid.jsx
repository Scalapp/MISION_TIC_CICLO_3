import {ProductoCard} from "./ProductoCard"
import productos from "./productos2.json";
console.log(productos);
export function ArticulosGrid() {
    return (
        <ul>{
            productos.map((producto)=>(
                 <ProductoCard key={producto.id} producto={producto}/>
 
            ))
            }
        </ul>
    );
}