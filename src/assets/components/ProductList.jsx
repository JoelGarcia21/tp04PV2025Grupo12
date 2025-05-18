import ProductItem from "./ProductItem";

const ProductList = ({ products, onEdit, onDelete, onRestore }) => {

  //Aqui se filtran los productos para luego mostrar los disponibles
  const productosDisponibles = products.filter(p=>p.disponible);
  //Se detiene en cuanto encuentra el primer producto con disponible=false.
  const hayProductosNoDisponibles = products.some(p => !p.disponible);
  return (
    <div className="product-list">
      <div className="list-header">
        <h2>Lista de Productos</h2>
        {hayProductosNoDisponibles && (
          <button 
            onClick={onRestore}
            className="restore-btn"
          >
            Restaurar Productos
          </button>
        )}
      </div>
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