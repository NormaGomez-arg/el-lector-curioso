import { useState } from "react";
import { useNavigate } from "react-router-dom";

function FinalizarCompra({ carrito, vaciarCarrito }) {
  const navigate = useNavigate();
  const [formulario, setFormulario] = useState({
    nombre: "",
    email: "",
    telefono: "",
    direccion: "",
    localidad: "",
    entrega: "",
    mensaje: "",
  });

  const manejarCambio = (e) => {
    const { name, value } = e.target;

    setFormulario({
      ...formulario,
      [name]: value,
    });
  };
  const manejarEnvio = (e) => {
    e.preventDefault();
    if (carrito.length === 0) {
      alert("No podés confirmar una compra con el carrito vacío.");
      return;
    }

    if (
      formulario.nombre === "" ||
      formulario.email === "" ||
      formulario.telefono === "" ||
      formulario.direccion === "" ||
      formulario.localidad === "" ||
      formulario.entrega === ""
    ) {
      alert("Por favor, completá todos los campos obligatorios.");
      return;
    }

    alert("¡Compra confirmada!");
    vaciarCarrito();
    navigate("/");
  };

  return (
    <main className="py-5">
      <div className="container">
        <h1 className="fw-bold mb-3" style={{ color: "#202C39" }}>
          Finalizar compra
        </h1>

        <p className="mb-4">Completá tus datos para confirmar tu compra.</p>

        <form onSubmit={manejarEnvio}>
          <div className="mb-3">
            <label htmlFor="nombre" className="form-label">
              Nombre completo
            </label>

            <input
              type="text"
              className="form-control"
              id="nombre"
              name="nombre"
              value={formulario.nombre}
              onChange={manejarCambio}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email
            </label>

            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              value={formulario.email}
              onChange={manejarCambio}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="telefono" className="form-label">
              Teléfono
            </label>

            <input
              type="tel"
              className="form-control"
              id="telefono"
              name="telefono"
              value={formulario.telefono}
              onChange={manejarCambio}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="direccion" className="form-label">
              Dirección
            </label>

            <input
              type="text"
              className="form-control"
              id="direccion"
              name="direccion"
              value={formulario.direccion}
              onChange={manejarCambio}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="localidad" className="form-label">
              Localidad
            </label>

            <input
              type="text"
              className="form-control"
              id="localidad"
              name="localidad"
              value={formulario.localidad}
              onChange={manejarCambio}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="entrega" className="form-label">
              Método de entrega
            </label>

            <select
              className="form-select"
              id="entrega"
              name="entrega"
              value={formulario.entrega}
              onChange={manejarCambio}
            >
              <option value="">Seleccioná una opción</option>
              <option value="domicilio">Envío a domicilio</option>
              <option value="retiro">Retiro en el local</option>
            </select>
          </div>

          <div className="mb-3">
            <label htmlFor="mensaje" className="form-label">
              Mensaje (opcional)
            </label>

            <textarea
              className="form-control"
              id="mensaje"
              name="mensaje"
              rows="4"
              value={formulario.mensaje}
              onChange={manejarCambio}
            ></textarea>
          </div>

          <button
            type="submit"
            className="btn"
            style={{
              backgroundColor: "#F29559",
              color: "#202C39",
              border: "none",
            }}
          >
            Confirmar compra
          </button>
        </form>
      </div>
    </main>
  );
}

export default FinalizarCompra;
