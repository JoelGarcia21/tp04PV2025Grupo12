import ProductItem from "./ProductItem";

const ProductList = ({ products, onEdit, onDelete }) => {

  //aca se filtran los productos para luego mostrar los disponibles
  const productosDisponibles = products.filter(p=>p.disponible)
  return (
    <div className="product-list">
      <h2>Lista de Productos</h2>
      {productosDisponibles.length === 0 ? (
        <p>No hay productos registrados</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Marca</th>
              <th>Precio Unitario</th>
              <th>Descuento</th>
              <th>Precio Final</th>
              <th>Stock</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {productosDisponibles.map(product => (
              <ProductItem key={product.id} product={product} onEdit={onEdit} onDelete={onDelete} />
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default ProductList;