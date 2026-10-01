import { Link } from "react-router-dom";

function Categorias() {
  return (
    <section
      className="py-5"
      id="categorias"
      style={{ backgroundColor: "#D1DEE9" }}
    >
      <div className="container text-center">
        <h2 className="fw-bold mb-2" style={{ color: "#202C39" }}>
          Explorá por categoría
        </h2>

        <p className="mb-4" style={{ color: "#283845" }}>
          Encontrá tu próxima lectura según tus intereses.
        </p>

        <div className="row g-4">
          <div className="col-12 col-sm-6 col-lg-3">
            <Link
              to="/productos?categoria=Novela"
              className="text-decoration-none"
            >
              <div className="card h-100">
                <img
                  src="/img/categorias/categoria-novela.png"
                  className="card-img-top"
                  alt="Novela"
                />
                <div className="card-body">
                  <h5 className="card-title">Novela</h5>
                </div>
              </div>
            </Link>
          </div>

          <div className="col-12 col-sm-6 col-lg-3">
            <Link
              to="/productos?categoria=Policial%20y%20misterio"
              className="text-decoration-none"
            >
              <div className="card h-100">
                <img
                  src="/img/categorias/categoria-policial.png"
                  className="card-img-top"
                  alt="Policial y misterio"
                />
                <div className="card-body">
                  <h5 className="card-title">Policial y misterio</h5>
                </div>
              </div>
            </Link>
          </div>

          <div className="col-12 col-sm-6 col-lg-3">
            <Link
              to="/productos?categoria=Historia"
              className="text-decoration-none"
            >
              <div className="card h-100">
                <img
                  src="/img/categorias/categoria-historia.png"
                  className="card-img-top"
                  alt="Historia"
                />
                <div className="card-body">
                  <h5 className="card-title">Historia</h5>
                </div>
              </div>
            </Link>
          </div>

          <div className="col-12 col-sm-6 col-lg-3">
            <Link
              to="/productos?categoria=Infantil"
              className="text-decoration-none"
            >
              <div className="card h-100">
                <img
                  src="/img/categorias/categoria-infantil.png"
                  className="card-img-top"
                  alt="Infantil"
                />
                <div className="card-body">
                  <h5 className="card-title">Infantil</h5>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Categorias;
