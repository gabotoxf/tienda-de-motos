import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";   // ⬅ Importa el header
import Motos from "./components/Motos";
import DetalleMoto from "./components/DetalleMoto";
import Comprar from "./components/Comprar";
import Home from "./components/Home";


function App() {
  return (
    <BrowserRouter>

      {/* HEADER visible en todas las páginas */}
      <Header />

      <Routes>
        {/* Página principal */}
        <Route path="/" element={<Home />} />

        {/* Listado de motos */}
        <Route path="/motos" element={<Motos />} />

        {/* Detalle */}
        <Route path="/moto/:id" element={<DetalleMoto />} />

        {/* Compra */}
        <Route path="/comprar/:id" element={<Comprar />} />
      </Routes>

    </BrowserRouter>
  );
}


export default App;
