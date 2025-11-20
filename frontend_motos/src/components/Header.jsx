import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faInstagram, faXTwitter } from "@fortawesome/free-brands-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";


export default function Header() {
    return (
        <header
            className="navbar navbar-expand-lg bg-light shadow-sm d-flex flex-column text-black p-0"
            style={{
                backdropFilter: "blur(10px)",
                borderBottom: "1px solid rgba(255,255,255,0.1)",
            }}
        >
            <div className="container-fluid bg-white py-2 barra px-5">
                <span>Contáctanos: +123 456 7890</span>
                <span>No te arrepentirás de los mejores precios</span>
                <div className="redes">
                    <a href="https://facebook.com" className="me-3 text-white">
                        <FontAwesomeIcon icon={faFacebookF} size="1x" />
                    </a>

                    <a href="https://twitter.com" className="me-3 text-white">
                        <FontAwesomeIcon icon={faXTwitter} size="1x" />
                    </a>

                    <a href="https://instagram.com" className="text-white">
                        <FontAwesomeIcon icon={faInstagram} size="1x" />
                    </a>
                </div>


            </div>
            <div className="container-fluid px-5 py-3 d-flex justify-content-between align-items-center">

                <Link className="navbar-brand fw-bold fs-3 d-flex align-items-center" to="/">
                    MotoStore
                </Link>

                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navMenu"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navMenu">

                    <ul className="navbar-nav mx-auto mb-2 mb-lg-0">

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
                </div>

                <div>
                    <Link className="btn text-light btn-secondary px-4 fw-semibold" to="/motos">
                        <FontAwesomeIcon icon={faPhone} size="1x" /> Contáctanos
                    </Link>
                </div>

            </div>
        </header>
    );
}
