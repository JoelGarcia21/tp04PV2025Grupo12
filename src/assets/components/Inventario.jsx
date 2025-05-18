import {useState, useEffect, useCallback} from 'react';
import ProductForm from './ProductForm.jsx';
import ProductList from './ProductList';
import '../styles/intentario-style.css';
import SearchBar from './SearchBar.jsx';

function Inventario() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [productToEdit, setProductToEdit] = useState(null);
  
  const addProduct = (newProduct) => {
    setProducts([...products, { ...newProduct, id: Date.now() }]);
  };
  
  const deleteProduct = useCallback((productId) => {
    setProducts(prevProducts =>
      prevProducts.map(product =>
        product.id === productId 
          ? { ...product, disponible: false } 
          : product
      )
    );
  }, []); 

  const restoreProducts = useCallback(() => {
  setProducts(prevProducts => 
    prevProducts.map(product => 
      !product.disponible ? { ...product, disponible: true } : product
    )
  );
}, []);

  const updateProduct = (updated) => {
    setProducts(products.map(p => p.id === updated.id ? updated : p));
    setProductToEdit(null); // Salir del modo edición
  };
  const handleEdit = (product) => {
    setProductToEdit(product);
  };
  useEffect(() => {
    const productosIniciales = [
      {
        id: 1,
        nombre: "Teclado mecánico",
        marca: "Nord",
        precioUnitario: 58000,
        descuento: 10,
        stock: 15,
        disponible: true,
      },
      {
        id: 2,
        nombre: "Mouse inalámbrico",
        marca: "Logitech",
        precioUnitario: 9590,
        descuento: 5,
        stock: 20,
        disponible: true,
      },
      {
        id: 3,
        nombre: "Monitor 24 pulgadas",
        marca: "LG",
        precioUnitario: 279000,
        descuento: 15,
        stock: 7,
        disponible: true,
      },
      {
        id: 4,
        nombre: "Auriculares Bluetooth",
        marca: "sony",
        precioUnitario: 20000,
        descuento: 8,
        stock: 25,
        disponible: true,
      },
      {
        id: 5,
        nombre: "Webcam HD",
        marca: "razer",
        precioUnitario: 35900,
        descuento: 12,
        stock: 12,
        disponible: true,
      }
    ].map(producto => ({
      ...producto,
      precioConDescuento: producto.precioUnitario * (1 - producto.descuento / 100)
    }));
    setProducts(productosIniciales);
    
    
  }, []);
    console.clear();
    console.log(products)
  return (
    <div className="list-container">
      <h1>Gestion de Productos</h1>
      <ProductForm
        onAddProduct={addProduct}
        onUpdateProduct={updateProduct}
        productToEdit={productToEdit}
        cancelEdit={setProductToEdit}
      />
      <SearchBar
        allProducts={products}
        onResults={setFilteredProducts}
      />
      <ProductList
        products={filteredProducts.length?filteredProducts:products}//si los productos filtrados tiene productos se muestra esa lista
        onEdit={handleEdit}  
        onDelete={deleteProduct} 
        onRestore={restoreProducts}
        // products={products} // codigo anterior
      />
    </div>
  );
}

export default Inventario;