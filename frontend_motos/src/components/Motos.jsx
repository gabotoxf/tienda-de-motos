import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Motos() {
  const [motos, setMotos] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/motos")
      .then((res) => res.json())
      .then((data) => setMotos(data));
  }, []);

  return (
    <div className="min-vh-100 text-dark py-5 px-4">
      <h1 className="display-4 fw-bold mb-5">
        Motos Disponibles
      </h1>

      <div className="row g-4">
        {motos.map((moto) => (
          <div key={moto.id} className="col-12 col-md-6 col-lg-4">
            <div className="card bg-secondary border-0 shadow-lg h-100 rounded-2 overflow-hidden moto-card">
              <div className="bg-black d-flex justify-content-center align-items-center p-3" style={{ height: "200px" }}>
                <img
                  src={moto.imagen}
                  alt={moto.nombre}
                  className="img-fluid"
                  style={{ maxHeight: "100%", objectFit: "contain" }}
                />
              </div>

              <div className="card-body">
                <h5 className="card-title fw-bold text-white">
                  {moto.marca} {moto.modelo}
                </h5>

                <p className="card-text fs-5 text-white fw-semibold">
                  ${moto.precio}
                </p>

                <Link
                  to={`/moto/${moto.id}`}
                  className="btn btn-gradient w-100 fw-bold py-2"
                >
                  Ver más
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Gradiente personalizado */}
      <style>
        {`
          .btn-gradient {
            background-image: linear-gradient(to right, #01060d, #292b2e, #4d4e50, #747476, #9d9d9d);
  color: #fff;
            border: none;
            color: white;
            transition: 0.3s ease;
            border-radius: 12px;
          }

          .btn-gradient:hover {
            opacity: .85;
          }

          .img-fluid {
            transition: transform .3s ease, box-shadow .3s ease;
          }

          .moto-card:hover .img-fluid{
            transform: scale(1.04);
          }
        `}
      </style>
    </div>
  );
}
