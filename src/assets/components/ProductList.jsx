import ProductItem from "./ProductItem";

const ProductList = ({ products }) => {
  return (
    <div className="product-list">
      <h2>Lista de Productos</h2>
      {products.length === 0 ? (
        <p>No hay productos registrados</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Descripción</th>
              <th>Precio Unitario</th>
              <th>Descuento</th>
              <th>Precio Final</th>
              <th>Stock</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {products.map(product => (
              <ProductItem idP={product.id} product={product} />
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default ProductList;