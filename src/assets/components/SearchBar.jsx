import {useState, useEffect, useMemo} from 'react'
import '/src/assets/Styles/search-bar.css'
const SearchBar = ({ allProducts, onResults }) =>{
    const [search, setSearch] = useState('');

    //Memoriza el resultado de la función de filtrado, evitando que se recalculen los productos filtrados en cada render
    const filtrado = useMemo(() => {

        const consulta = search.trim().toLowerCase();// Trim() para borrar espacios vacios
        if (!consulta) return [];// Si el campo de búsqueda está vacío, se devuelve un array vacio
        return allProducts.filter(product =>
          product.nombre.toLowerCase().includes(consulta) ||
          product.marca.toLowerCase().includes(consulta) ||
          product.id.toString().includes(consulta)
        );
      }, [search]);// Se vuelve a ejecutar solo si 'search' cambian

    //Se activa cada vez que cambia el resultado filtrado o la función onResults
    useEffect(() => {
    //Llama a la función onResults pasándole los productos filtrados, para que el componente padre los reciba y actualice su vista
      if (search.trim() === "") {
        onResults([]); // Enviar array vacio para indicar que no hay filtro
      } else {
        onResults(filtrado); // Enviar resultados filtrados
      }  
    }, [filtrado, onResults]);  
    return(
        <div className="search-bar">
            <input
            type="text"
            placeholder="Buscar por ID, Nombre o Marca"
            value={search}
            onChange={e => setSearch(e.target.value)}
      />
        </div>
    );
}
export default SearchBar;