import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";

export default function DetalleMoto() {
  const { id } = useParams();
  const [moto, setMoto] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:8000/motos/${id}`)
      .then(res => res.json())
      .then(data => setMoto(data));
  }, [id]);

  if (!moto) return <p>Cargando...</p>;

  return (
    <div>
      <img src={moto.imagen} width="250" />
      <h2>{moto.marca} {moto.modelo}</h2>
      <p>Cilindraje: {moto.cilindraje} cc</p>
      <p>Precio: ${moto.precio}</p>

      <Link to={`/comprar/${moto.id}`}>Comprar</Link>
    </div>
  );
}
