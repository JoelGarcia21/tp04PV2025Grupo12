
const ProductItem = ({ product }) => {
  return (
    <tr idP={product.id}>
      <td>{product.descripcion}</td>
      <td>${product.precioUnitario.toFixed(2)}</td>
      <td>{product.descuento}%</td>
      <td>${product.precioConDescuento?.toFixed(2)}</td>
      <td>{product.stock}</td>
      <td>
        <button>Editar</button>
        <button>Eliminar</button>
      </td>
    </tr>
  );
};

export default ProductItem;
