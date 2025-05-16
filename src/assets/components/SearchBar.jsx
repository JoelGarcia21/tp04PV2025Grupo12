import {useState, useEffect, useMemo} from 'react'
import '/src/assets/Styles/search-bar.css'
const SearchBar = ({ allProducts, onResults }) =>{
    const [search, setSearch] = useState('');

    //Memoriza el resultado de la función de filtrado, evitando que se recalculen los productos filtrados en cada render
    const filtrado = useMemo(() => {
      
        const consulta = search.trim().toLowerCase();// Trim() para borrar espacios vacios
        if (!consulta) return allProducts;// Si el campo de búsqueda está vacío, se devuelven todos los productos sin filtrar
        return allProducts.filter(product =>
          product.nombre.toLowerCase().includes(consulta) ||
          product.marca.toLowerCase().includes(consulta) ||
          product.id.toString().includes(consulta)
        );
      }, [search, allProducts]);// Se vuelve a ejecutar solo si 'search' o 'allProducts' cambian

    //Se activa cada vez que cambia el resultado filtrado o la función onResults
    useEffect(() => {
    //Llama a la función onResults pasándole los productos filtrados, para que el componente padre los reciba y actualice su vista
        onResults(filtrado);
    }, [filtrado, onResults]);  
    return(
        <div className="search-bar">
            <input
            type="text"
            placeholder="Buscar por ID o Descripción"
            value={search}
            onChange={e => setSearch(e.target.value)}
      />
        </div>
    );
}
export default SearchBar;