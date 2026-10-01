import { Link } from "react-router-dom";
function Carrito({
  carrito,
  aumentarCantidad,
  disminuirCantidad,
  eliminarDelCarrito,
}) {
  const total = carrito.reduce(
    (acumulador, producto) => acumulador + producto.precio * producto.cantidad,
    0,
  );

  const cantidadTotal = carrito.reduce(
    (acumulador, producto) => acumulador + producto.cantidad,
    0,
  );

  return (
    <main className="py-5">
      <div className="container">
        <h1 className="fw-bold mb-4" style={{ color: "#202C39" }}>
          Carrito
        </h1>

        {carrito.length === 0 ? (
          <p>Tu carrito está vacío.</p>
        ) : (
          <>
            {carrito.map((producto) => (
              <div key={producto.id} className="mb-3">
                <span className="me-3">{producto.titulo}</span>

                <span className="me-3">
                  ${producto.precio.toLocaleString("es-AR")}
                </span>

                <button
                  className="btn btn-sm btn-outline-secondary"
                  onClick={() => disminuirCantidad(producto.id)}
                  disabled={producto.cantidad === 1}
                >
                  −
                </button>

                <span className="mx-3">{producto.cantidad}</span>

                <button
                  className="btn btn-sm btn-outline-secondary"
                  onClick={() => aumentarCantidad(producto.id)}
                  disabled={producto.cantidad === producto.stock}
                >
                  +
                </button>

                <button
                  className="btn btn-sm btn-outline-danger ms-3"
                  onClick={() => eliminarDelCarrito(producto.id)}
                >
                  Eliminar
                </button>

                <span className="ms-3 fw-bold">
                  Subtotal: $
                  {(producto.precio * producto.cantidad).toLocaleString(
                    "es-AR",
                  )}
                </span>
              </div>
            ))}

            <hr />

            <p className="fs-5">
              Cantidad total de productos: <strong>{cantidadTotal}</strong>
            </p>

            <h3 className="fw-bold mt-4" style={{ color: "#202C39" }}>
              Total: ${total.toLocaleString("es-AR")}
            </h3>
            <Link
              to="/finalizar-compra"
              className="btn mt-3"
              style={{
                backgroundColor: "#F29559",
                color: "#202C39",
                border: "none",
              }}
            >
              Finalizar compra
            </Link>
          </>
        )}
      </div>
    </main>
  );
}

export default Carrito;
