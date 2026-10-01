import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import productos from "../data/productos.js";
import ProductoCard from "../components/productoCard.jsx";

function Productos({ agregarAlCarrito }) {
  const [searchParams] = useSearchParams();
  const categoriaURL = searchParams.get("categoria");

  const [busqueda, setBusqueda] = useState("");
  const [categoria, setCategoria] = useState(categoriaURL || "");
  const productosFiltrados = productos.filter((producto) => {
    const coincideBusqueda =
      producto.titulo.toLowerCase().includes(busqueda.toLowerCase()) ||
      producto.autor.toLowerCase().includes(busqueda.toLowerCase());

    const coincideCategoria =
      categoria === "" || producto.categoria === categoria;

    return coincideBusqueda && coincideCategoria;
  });
  return (
    <main className="py-5">
      <div className="container">
        <div className="text-center mb-5">
          <h1 className="fw-bold" style={{ color: "#202C39" }}>
            Catálogo
          </h1>

          <p style={{ color: "#283845" }}>Encontrá tu próxima lectura.</p>
          <input
            type="text"
            className="form-control mt-4"
            placeholder="Buscar por título o autor..."
            value={busqueda}
            onChange={(e) => setBusqueda(e.target.value)}
          />
          <select
            className="form-select mt-3"
            value={categoria}
            onChange={(e) => setCategoria(e.target.value)}
          >
            <option value="">Todas las categorías</option>
            <option value="Novela">Novela</option>
            <option value="Policial y misterio">Policial y misterio</option>
            <option value="Historia">Historia</option>
            <option value="Infantil">Infantil</option>
          </select>
        </div>

        <div className="row g-4">
          {productosFiltrados.map((producto) => (
            <div className="col-12 col-sm-6 col-lg-3" key={producto.id}>
              <ProductoCard
                producto={producto}
                agregarAlCarrito={agregarAlCarrito}
              />
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}

export default Productos;
