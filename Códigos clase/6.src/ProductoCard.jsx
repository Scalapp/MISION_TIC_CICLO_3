import productos from "./productos2.json";
export function ProductoCard({producto}){

    const imageurl="uan url"+productos.includes
    return <li>
        <img src={imageurl} alt={producto.nombre} />
        {productos.nombre}
        </li>
}