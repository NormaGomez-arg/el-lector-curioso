import { Link } from "react-router-dom";

function Hero() {
  return (
    <section
      className="d-flex align-items-center"
      style={{
        backgroundImage: "url('/img/hero-el-lector-curioso.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "calc(100vh - 85px)",
      }}
    >
      <div className="container">
        <div className="col-md-6 text-white">
          <h1 className="display-4 fw-bold">El Lector Curioso</h1>

          <p className="fs-4">Libros para seguir descubriendo.</p>

          <Link
            to="/productos"
            className="btn"
            style={{
              backgroundColor: "#F29559",
              color: "#202C39",
            }}
          >
            Ver catálogo
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Hero;
