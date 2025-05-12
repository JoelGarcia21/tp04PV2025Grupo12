import {useState, useEffect} from 'react';
import ProductForm from './ProductForm.jsx';
import ProductList from './ProductList';
import '../styles/intentario-style.css';
import SearchBar from './SearchBar.jsx';

function Inventario() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  
  const addProduct = (newProduct) => {
    setProducts([...products, { ...newProduct, id: Date.now() }]);
  };

  useEffect(() => {
    const productosIniciales = [
      {
        descripcion: "Teclado mecánico",
        precioUnitario: 58000,
        descuento: 10,
        stock: 15,
        precioConDescuento: 52200
      },
      {
        descripcion: "Mouse inalámbrico",
        precioUnitario: 9590,
        descuento: 5,
        stock: 20,
        precioConDescuento: 9110.5
      },
      {
        descripcion: "Monitor 24 pulgadas",
        precioUnitario: 279000,
        descuento: 15,
        stock: 7,
        precioConDescuento: 237150
      },
      {
        descripcion: "Auriculares Bluetooth",
        precioUnitario: 20000,
        descuento: 8,
        stock: 25,
        precioConDescuento: 18400
      },
      {
        descripcion: "Webcam HD",
        precioUnitario: 35900,
        descuento: 12,
        stock: 12,
        precioConDescuento: 31592
      }
    ].map(producto => ({
      ...producto,
      id: Date.now()
    }));
    setProducts(productosIniciales);
  }, []);

  return (
    <div className="list-container">
      <h1>Gestion de Productos</h1>
      <ProductForm
        onAddProduct={addProduct}
      />
      <SearchBar
        allProducts={products}
        onResults={setFilteredProducts}
      />
      <ProductList
        products={filteredProducts}        
        // products={products} // codigo anterior
      />
    </div>
  );
}

export default Inventario;