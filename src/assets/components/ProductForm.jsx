import { useState } from 'react';

const ProductForm = ({ onAddProduct }) => {
  const [product, setProduct] = useState({
    nombre: '',
    marca: '',
    precioUnitario: 0,
    descuento: 0,
    stock: 0,
    disponible: true,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct({
      ...product,
      [name]: (name === 'nombre' || name === 'marca')  ? value : Number(value)
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
      nombre: '',
      marca: '',
      precioUnitario: 0,
      descuento: 0,
      stock: 0,
      disponible: true,
    });
  };

  return (
    <form onSubmit={handleSubmit} className="list-form">
      <h2>{'Agregar Producto'}</h2>

      <div className="form-group">
        <label>Nombre:</label>
        <input
          type="text"
          name="nombre"
          placeholder='Ingrese nombre del producto...'
          value={product.nombre}
          onChange={handleChange}
          required
        />
      </div>

      <div className="form-group">
        <label>Marca:</label>
        <input
          type="text"
          name="marca"
          placeholder='Ingrese marca del producto...'
          value={product.marca}
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