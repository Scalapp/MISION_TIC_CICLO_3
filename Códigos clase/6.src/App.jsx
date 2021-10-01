import { ArticulosGrid } from "./ArticulosGrid";
export function App() {
    return (
        <><div className="contenedor">
            Hola mundo desde un componente en otro archivo</div>
            <header>
                <h1> Esta es mi tienda en linea</h1>
            </header>
            <main>
                <ArticulosGrid></ArticulosGrid>
            </main>
        </>

    );

}