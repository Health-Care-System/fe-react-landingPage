import { Link } from "react-router-dom"
import Logo from "../../image/logo-health.png"

export const Navbar = () => {
    return (
      <div>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <img src={Logo} alt="" width={40}/>
                <Link className="navbar-brand mx-2 fw-bold" style={{color:"#149BDB"}}>
                    Healthify
                </Link>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                    >
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item mx-3">
                            <Link
                                className="navbar link-secondary link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover"
                                to="/"
                            >
                                    Beranda
                            </Link>
                        </li>
                        <li className="nav-item mx-3">
                            <Link
                                className="navbar link-secondary link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover"
                                to="/"
                            >
                                    Tentang Kami
                            </Link>
                        </li>
                        <li className="nav-item mx-3">
                            <Link
                                className="navbar link-secondary link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover"
                                to="/"
                            >
                                    Layanan
                            </Link>
                        </li>
                        <li className="nav-item mx-3">
                            <Link
                                className="navbar link-secondary link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover"
                                to="/"
                            >
                                    FAQ
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
      </div>
    )
  }