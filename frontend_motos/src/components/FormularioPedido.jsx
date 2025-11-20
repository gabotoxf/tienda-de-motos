import { useState } from "react";
import axios from "axios";

export default function FormularioPedido() {
  const [form, setForm] = useState({
    nombre_cliente: "",
    telefono: "",
    moto: "",
    comentario: ""
  });

  const handleChange = e =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const enviar = async () => {
    await axios.post("http://localhost:8000/api/pedidos", form);
    alert("Pedido enviado correctamente");
  };

  return (
    <div>
      <h2>Hacer pedido</h2>

      <input name="nombre_cliente" placeholder="Nombre" onChange={handleChange} />
      <input name="telefono" placeholder="Teléfono" onChange={handleChange} />
      <input name="moto" placeholder="Moto" onChange={handleChange} />

      <textarea name="comentario" placeholder="Comentario" onChange={handleChange}></textarea>

      <button onClick={enviar}>Enviar</button>
    </div>
  );
}
