import { Link } from "react-router-dom";

function ProductoCard({ producto, agregarAlCarrito }) {
  return (
    <div className="card h-100">
      <img
        src={producto.imagen}
        className="card-img-top"
        alt={producto.titulo}
        style={{
          height: "400px",
          objectFit: "contain",
          padding: "20px",
        }}
      />

      <div className="card-body d-flex flex-column">
        <h5 className="card-title" style={{ minHeight: "48px" }}>
          {producto.titulo}
        </h5>

        <p className="text-muted mb-1">{producto.autor}</p>

        <p className="mb-2" style={{ color: "#8197A9" }}>
          {producto.categoria}
        </p>

        <p className="fw-bold">${producto.precio.toLocaleString("es-AR")}</p>

        {producto.stock === 0 && (
          <p className="text-danger fw-bold">Sin stock</p>
        )}

        <p>{producto.descripcionBreve}</p>

        <div className="mt-auto d-grid gap-2">
          <Link
            to={`/producto/${producto.id}`}
            className="btn"
            style={{
              backgroundColor: "#8197A9",
              color: "#FFFFFF",
            }}
          >
            Ver detalle
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
  );
}

export default ProductoCard;
