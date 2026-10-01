import { Link } from "react-router-dom";

function Destacados() {
  const estiloImagen = {
    height: "400px",
    objectFit: "contain",
    padding: "20px",
  };

  const estiloTitulo = {
    minHeight: "58px",
  };

  const estiloBoton = {
    backgroundColor: "#F29559",
    color: "#202C39",
    border: "none",
  };

  return (
    <section className="py-5 bg-white">
      <div className="container">
        <div className="text-center mb-4">
          <h2 className="fw-bold" style={{ color: "#202C39" }}>
            Libros destacados
          </h2>

          <p style={{ color: "#283845" }}>
            Algunas lecturas que elegimos para vos.
          </p>
        </div>

        <div className="row g-4">
          <div className="col-12 col-sm-6 col-lg-3">
            <div className="card h-100">
              <img
                src="/img/libros/Cien_Anos.jpg"
                className="card-img-top"
                alt="Cien años de soledad"
                style={estiloImagen}
              />

              <div className="card-body d-flex flex-column">
                <h5 className="card-title" style={estiloTitulo}>
                  Cien años de soledad
                </h5>

                <p className="text-muted mb-2">Gabriel García Márquez</p>

                <p className="fs-5 fw-bold" style={{ color: "#202C39" }}>
                  $35.000
                </p>

                <Link
                  to="/producto/2"
                  className="btn mt-auto"
                  style={estiloBoton}
                >
                  Ver detalle
                </Link>
              </div>
            </div>
          </div>

          <div className="col-12 col-sm-6 col-lg-3">
            <div className="card h-100">
              <img
                src="/img/libros/El_asesinato_de_Roger.jpg"
                className="card-img-top"
                alt="El asesinato de Roger Ackroyd"
                style={estiloImagen}
              />

              <div className="card-body d-flex flex-column">
                <h5 className="card-title" style={estiloTitulo}>
                  El asesinato de Roger Ackroyd
                </h5>

                <p className="text-muted mb-2">Agatha Christie</p>

                <p className="fs-5 fw-bold" style={{ color: "#202C39" }}>
                  $28.800
                </p>

                <Link
                  to="/producto/6"
                  className="btn mt-auto"
                  style={estiloBoton}
                >
                  Ver detalle
                </Link>
              </div>
            </div>
          </div>

          <div className="col-12 col-sm-6 col-lg-3">
            <div className="card h-100">
              <img
                src="/img/libros/De_animales_a_dioses.jpg"
                className="card-img-top"
                alt="Sapiens. De animales a dioses"
                style={estiloImagen}
              />

              <div className="card-body d-flex flex-column">
                <h5 className="card-title" style={estiloTitulo}>
                  Sapiens. De animales a dioses
                </h5>

                <p className="text-muted mb-2">Yuval Noah Harari</p>

                <p className="fs-5 fw-bold" style={{ color: "#202C39" }}>
                  $51.000
                </p>

                <Link
                  to="/producto/12"
                  className="btn mt-auto"
                  style={estiloBoton}
                >
                  Ver detalle
                </Link>
              </div>
            </div>
          </div>

          <div className="col-12 col-sm-6 col-lg-3">
            <div className="card h-100">
              <img
                src="/img/libros/El_principito.jpg"
                className="card-img-top"
                alt="El principito"
                style={estiloImagen}
              />

              <div className="card-body d-flex flex-column">
                <h5 className="card-title" style={estiloTitulo}>
                  El principito
                </h5>

                <p className="text-muted mb-2">Antoine de Saint-Exupéry</p>

                <p className="fs-5 fw-bold" style={{ color: "#202C39" }}>
                  $17.900
                </p>

                <Link
                  to="/producto/16"
                  className="btn mt-auto"
                  style={estiloBoton}
                >
                  Ver detalle
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Destacados;
