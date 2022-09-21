import productos from "./productos.json";
import {ProductoCard} from "./ProductoCard"

console.log(productos);
export function ArticulosGrid() {
    return (
        <ul>{
            productos.map((producto)=>(
                <ProductoCard key={producto} producto={producto}/>
            ))
            }
        </ul>
    );
}