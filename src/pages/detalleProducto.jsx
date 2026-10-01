import { useParams, Link } from "react-router-dom";
import productos from "../data/productos.js";

function DetalleProducto({ agregarAlCarrito }) {
  const { id } = useParams();

  const producto = productos.find((producto) => producto.id === Number(id));

  return (
    <main className="py-5">
      <div className="container">
        <div className="row g-5 align-items-start">
          <div className="col-12 col-md-5 text-center">
            <img
              src={producto.imagen}
              alt={producto.titulo}
              className="img-fluid"
              style={{
                maxHeight: "550px",
                objectFit: "contain",
              }}
            />
          </div>

          <div className="col-12 col-md-7">
            <h1 className="fw-bold mb-3" style={{ color: "#202C39" }}>
              {producto.titulo}
            </h1>

            <p className="fs-5 text-muted">{producto.autor}</p>

            <p className="fs-3 fw-bold" style={{ color: "#202C39" }}>
              ${producto.precio.toLocaleString("es-AR")}
            </p>

            <p>{producto.descripcionCompleta}</p>

            <p>
              <strong>Categoría:</strong> {producto.categoria}
            </p>

            <p>
              <strong>Editorial:</strong> {producto.editorial}
            </p>

            <p>
              <strong>Páginas:</strong> {producto.paginas}
            </p>

            <p>
              <strong>Stock:</strong> {producto.stock}
            </p>

            <div className="d-flex gap-3 mt-4">
              <Link
                to="/productos"
                className="btn"
                style={{
                  backgroundColor: "#8197A9",
                  color: "#FFFFFF",
                }}
              >
                Volver al catálogo
              </Link>

              <button
                className="btn"
                style={{
                  backgroundColor: "#F29559",
                  color: "#202C39",
                  border: "none",
                }}
                onClick={() => agregarAlCarrito(producto)}
                disabled={producto.stock === 0}
              >
                {producto.stock === 0 ? "Sin stock" : "Agregar al carrito"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default DetalleProducto;
