import { useParams } from "react-router-dom";
import { useState } from "react";

export default function Comprar() {
  const { id } = useParams();

  const [form, setForm] = useState({
    nombre: "",
    telefono: "",
    direccion: "",
  });

  const handleSubmit = e => {
    e.preventDefault();

    fetch("http://localhost:8000/api/pedidos", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        moto_id: id,
        ...form
      })
    })
    .then(res => res.json())
    .then(() => alert("Pedido enviado correctamente"));
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Completar compra</h2>

      <input placeholder="Nombre"
        onChange={e => setForm({...form, nombre: e.target.value})} />
      <input placeholder="Teléfono"
        onChange={e => setForm({...form, telefono: e.target.value})} />
      <input placeholder="Dirección"
        onChange={e => setForm({...form, direccion: e.target.value})} />

      <button type="submit">Enviar Pedido</button>
    </form>
  );
}
