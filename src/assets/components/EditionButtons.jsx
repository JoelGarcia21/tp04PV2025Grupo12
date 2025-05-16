const BotoneraEdicion = ({ onActualizar, onCancelar }) => (
  <div className="botonera-edicion">
    <button type="submit" onClick={onActualizar}>Actualizar</button>
    <button type="button" onClick={onCancelar}>Cancelar</button>
  </div>
);

export default BotoneraEdicion;
