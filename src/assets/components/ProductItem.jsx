const ProductItem = ({ product, onEdit, onDelete }) => {
  return (
    <tr>
      <td>{product.nombre}</td>
      <td>{product.marca}</td>
      <td>${product.precioUnitario.toFixed(2)}</td>
      <td>{product.descuento}%</td>
      <td>${product.precioConDescuento?.toFixed(2)}</td>
      <td>{product.stock}</td>
      <td>
        <button onClick={() => onEdit(product)}>Editar</button>
        <button onClick={() => onDelete(product.id)}>Eliminar</button>
      </td>
    </tr>
  );
};

export default ProductItem;
