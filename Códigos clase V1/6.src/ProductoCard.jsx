export function ProductoCard({producto})
 {
     return <li key={producto.id}>{producto.nombre}</li>
    
}