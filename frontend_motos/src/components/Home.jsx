import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from 'swiper/react';
import { useEffect, useState } from "react";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

// import required modules
import { FreeMode, Pagination } from 'swiper/modules';


export default function Home() {

    const [motos, setMotos] = useState([]);

    useEffect(() => {
        fetch("http://localhost:8000/motos")
            .then((res) => res.json())
            .then((data) => setMotos(data));
    }, []);



    return (
        <>
            <div className="mb-4 min-vh-100 d-flex flex-column justify-content-center align-items-center text-white px-4" style={{ backgroundColor: "#121212" }}>
                <h1 className="display-4 fw-bold mb-4 text-center">
                    Bienvenido a MotoStore
                </h1>
                <p className="lead mb-5 text-center">
                    Tu destino número uno para las mejores motos del mercado. Explora nuestra amplia selección y encuentra la moto perfecta para ti.
                </p>
                <Link to="/motos" className="btn btn-lg btn-light fw-bold py-2 px-4">
                    Ver Catálogo de Motos
                </Link>
            </div>


            <div className="px-4">
                <h2 className="my-5 fw-bold">Motos Destacadas</h2>

                <Swiper
                    slidesPerView={4}
                    spaceBetween={30}
                    freeMode={true}
                    modules={[FreeMode]}
                    className="mySwiper"
                >
                    {motos.map((moto) => (
                        <SwiperSlide key={moto.id}>
                            <div className="card border-0 h-100 rounded-2 overflow-hidden moto-card text-dark">
                                <div
                                    className="d-flex justify-content-center align-items-center p-3"
                                    style={{ height: "200px" }}
                                >
                                    <img
                                        src={moto.imagen}
                                        alt={moto.nombre}
                                        className="img-fluid"
                                        style={{ maxHeight: "100%", objectFit: "contain" }}
                                    />
                                </div>

                                <div className="card-body">
                                    <h5 className="card-title fw-bold">
                                        {moto.marca} {moto.modelo}
                                    </h5>

                                    <p className="card-text fs-6 fw-semibold">
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
                        </SwiperSlide>
                    ))}
                </Swiper>
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

        </>
    );
}