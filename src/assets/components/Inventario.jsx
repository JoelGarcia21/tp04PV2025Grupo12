import {useState} from 'react';
import ProductForm from './ProductForm.jsx';
import ProductList from './ProductList';


function Inventario() {
  const [products, setProducts] = useState([]);
  
  const addProduct = (newProduct) => {
    setProducts([...products, { ...newProduct, id: Date.now() }]);
  };

  return (
    <div className="list-container">
      <h1>Gestion de Productos</h1>
      <ProductForm
        onAddProduct={addProduct}
      />
      <ProductList
        products={products}
      />
    </div>
  );
}

export default Inventario;