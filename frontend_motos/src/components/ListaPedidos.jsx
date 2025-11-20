import { useEffect, useState } from "react";
import axios from "axios";

export default function ListaPedidos() {
  const [pedidos, setPedidos] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8000/api/pedidos")
      .then(res => setPedidos(res.data));
  }, []);

  return (
    <div>
      <h2>Pedidos</h2>
      <ul>
        {pedidos.map(p => (
          <li key={p.id}>
            {p.nombre_cliente} - {p.moto} ({p.telefono})
          </li>
        ))}
      </ul>
    </div>
  );
}
