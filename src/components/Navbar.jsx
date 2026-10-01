import { NavLink, useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();

  const irACategorias = () => {
    navigate("/");

    setTimeout(() => {
      const categorias = document.getElementById("categorias");

      if (categorias) {
        categorias.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);
  };

  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark"
      style={{ backgroundColor: "#202C39" }}
    >
      <div className="container">
        <span className="navbar-brand d-flex align-items-center">
          <img
            src="/img/isotipo-el-lector-curioso.png"
            alt="Logo de El Lector Curioso"
            width="65"
            className="me-2"
          />
          El Lector Curioso
        </span>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#menuPrincipal"
          aria-controls="menuPrincipal"
          aria-expanded="false"
          aria-label="Abrir menú"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="menuPrincipal">
          <div className="navbar-nav ms-auto">
            <NavLink className="nav-link" to="/">
              Inicio
            </NavLink>

            <NavLink className="nav-link" to="/productos">
              Productos
            </NavLink>

            <button
              className="nav-link btn btn-link text-start"
              onClick={irACategorias}
            >
              Categorías
            </button>

            <NavLink className="nav-link" to="/carrito">
              Carrito
            </NavLink>

            <NavLink className="nav-link" to="/contacto">
              Contacto
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
