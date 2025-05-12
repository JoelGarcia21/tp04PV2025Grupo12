import { useState } from 'react';

const ProductForm = ({ onAddProduct }) => {
  const [product, setProduct] = useState({
    descripcion: '',
    precioUnitario: 0,
    descuento: 0,
    stock: 0
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct({
      ...product,
      [name]: name === 'descripcion' ? value : Number(value)
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Calcular precio con descuento
    const productWithDiscount = {
      ...product,
      precioConDescuento: product.precioUnitario * (1 - product.descuento / 100)
    };
    onAddProduct(productWithDiscount);

    // Resetear formulario
    setProduct({
      descripcion: '',
      precioUnitario: 0,
      descuento: 0,
      stock: 0
    });
  };

  return (
    <form onSubmit={handleSubmit} className="list-form">
      <h2>{'Agregar Producto'}</h2>

      <div className="form-group">
        <label>Descripción:</label>
        <input
          type="text"
          name="descripcion"
          value={product.descripcion}
          onChange={handleChange}
          required
        />
      </div>

      <div className="form-group">
        <label>Precio Unitario:</label>
        <input
          type="number"
          name="precioUnitario"
          value={product.precioUnitario}
          onChange={handleChange}
          min="0"
          step="0.01"
          required
        />
      </div>

      <div className="form-group">
        <label>Descuento (%):</label>
        <input
          type="number"
          name="descuento"
          value={product.descuento}
          onChange={handleChange}
          min="0"
          max="100"
          required
        />
      </div>

      <div className="form-group">
        <label>Stock:</label>
        <input
          type="number"
          name="stock"
          value={product.stock}
          onChange={handleChange}
          min="0"
          required
        />
      </div>
      <button type="submit">Agregar</button>
    </form>
  );
};

export default ProductForm;