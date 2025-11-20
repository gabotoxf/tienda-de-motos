import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";   // ⬅ Importa el header
import Motos from "./components/Motos";
import DetalleMoto from "./components/DetalleMoto";
import Comprar from "./components/Comprar";

function App() {
  return (
    <BrowserRouter>

      {/* HEADER visible en todas las páginas */}
      <Header />

      {/* RUTAS */}
      <Routes>
        <Route path="/" element={<Motos />} />
        <Route path="/motos" element={<Motos />} /> {/* opcional */}
        <Route path="/moto/:id" element={<DetalleMoto />} />
        <Route path="/comprar/:id" element={<Comprar />} />
      </Routes>

    </BrowserRouter>
  );
}

export default App;
