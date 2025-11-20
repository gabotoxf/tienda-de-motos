import { Link } from "react-router-dom";

export default function Header() {
    return (
        <header
            className="navbar navbar-expand-lg bg-dark navbar-dark shadow-sm d-flex align-items-center justify-content-between"
            style={{
                backdropFilter: "blur(10px)",
                borderBottom: "1px solid rgba(255,255,255,0.1)",
            }}
        >
            <div className="container">

                {/* LOGO */}
                <Link className="navbar-brand fw-bold fs-3 d-flex align-items-center" to="/">
                    <span className="me-2">🏍️</span> MotoStore
                </Link>

                {/* BOTÓN MOBILE */}
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navMenu"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                {/* MENÚ */}
                <div className="collapse navbar-collapse" id="navMenu">

                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">

                        <li className="nav-item">
                            <Link className="nav-link" to="/">Inicio</Link>
                        </li>

                        <li className="nav-item">
                            <Link className="nav-link" to="/motos">Motos</Link>
                        </li>

                        <li className="nav-item">
                            <Link className="nav-link" to="/contacto">Contacto</Link>
                        </li>

                    </ul>

                    <Link className="btn btn-primary px-4 fw-semibold" to="/motos">
                        Ver catálogo
                    </Link>


                </div>

            </div>
        </header>
    );
}
