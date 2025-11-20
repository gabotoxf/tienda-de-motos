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
    <div className="w-100 h-100 d-flex justify-content-center align-items-center pt-5" >
      <div className="card shadow-sm border-0 rounded-4 overflow-hidden" style={{ width: "22rem" }}>

        <div className="position-relative">
          <img src={moto.imagen} alt="Moto" className="card-img-top" style={{ height: "180px", objectFit: "cover" }} />

          {/* Etiqueta de precio arriba */}
          <span className="badge bg-secondary position-absolute top-0 end-0 m-2 p-2 fs-6 shadow">
            ${moto.precio}
          </span>
        </div>

        <div className="card-body">
          <h5 className="card-title fw-bold text-dark">
            {moto.marca} {moto.modelo}
          </h5>

          <p className="text-muted mb-2">
            Cilindraje: <span className="fw-semibold">{moto.cilindraje} cc</span>
          </p>

          <div className="d-grid mt-3">
            <Link
              to={`/comprar/${moto.id}`}
              className="btn btn-dark rounded-3 py-2 fw-semibold"
            >
              Comprar ahora
            </Link>
          </div>
        </div>

      </div>
    </div >
  );
}
