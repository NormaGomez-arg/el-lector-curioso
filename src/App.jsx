import "./App.css";
import { Routes, Route } from "react-router-dom";
import { useState } from "react";

import Navbar from "./components/Navbar.jsx";
import Inicio from "./pages/Inicio.jsx";
import Productos from "./pages/productos.jsx";
import DetalleProducto from "./pages/detalleProducto.jsx";
import Carrito from "./pages/carrito.jsx";
import Contacto from "./pages/contacto.jsx";
import FinalizarCompra from "./pages/finalizarCompra.jsx";

function App() {
  const [carrito, setCarrito] = useState([]);

  const agregarAlCarrito = (producto) => {
    const productoEnCarrito = carrito.find((item) => item.id === producto.id);

    if (productoEnCarrito) {
      if (productoEnCarrito.cantidad < producto.stock) {
        const carritoActualizado = carrito.map((item) =>
          item.id === producto.id
            ? { ...item, cantidad: item.cantidad + 1 }
            : item,
        );

        setCarrito(carritoActualizado);
      }
    } else {
      setCarrito([...carrito, { ...producto, cantidad: 1 }]);
    }
  };
  const aumentarCantidad = (id) => {
    const carritoActualizado = carrito.map((item) =>
      item.id === id && item.cantidad < item.stock
        ? { ...item, cantidad: item.cantidad + 1 }
        : item,
    );

    setCarrito(carritoActualizado);
  };
  const disminuirCantidad = (id) => {
    const carritoActualizado = carrito.map((item) =>
      item.id === id && item.cantidad > 1
        ? { ...item, cantidad: item.cantidad - 1 }
        : item,
    );

    setCarrito(carritoActualizado);
  };
  const eliminarDelCarrito = (id) => {
    const carritoActualizado = carrito.filter((item) => item.id !== id);

    setCarrito(carritoActualizado);
  };
  const vaciarCarrito = () => {
    setCarrito([]);
  };

  return (
    <div>
      <Navbar />

      <Routes>
        <Route path="/" element={<Inicio />} />

        <Route
          path="/productos"
          element={<Productos agregarAlCarrito={agregarAlCarrito} />}
        />

        <Route
          path="/producto/:id"
          element={<DetalleProducto agregarAlCarrito={agregarAlCarrito} />}
        />

        <Route
          path="/carrito"
          element={
            <Carrito
              carrito={carrito}
              aumentarCantidad={aumentarCantidad}
              disminuirCantidad={disminuirCantidad}
              eliminarDelCarrito={eliminarDelCarrito}
            />
          }
        />
        <Route path="/contacto" element={<Contacto />} />
        <Route
          path="/finalizar-compra"
          element={
            <FinalizarCompra carrito={carrito} vaciarCarrito={vaciarCarrito} />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
