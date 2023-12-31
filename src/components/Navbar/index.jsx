import Logo from "../../assets/icon/brandLogo.png"
import './navbar.css'
import { useLocation } from "react-router-dom"

export const Navbar = () => {
    const menus = [
        { href: '#mainHero', label: 'Beranda' },
        { href: '#aboutUsHero', label: 'Tentang Kami' },
        { href: '#serviceHero', label: 'Layanan' },
        { href: '#faqSection', label: 'FAQ' },
    ]

    const location = useLocation()
    const hash = location.hash
    return (
        <header >
            <nav className="navbar navbar-expand-lg fixed-top py-3 px-3 px-md-4 px-xxl-0 bg-light">
                <div className="container-xxl d-flex flex-row justify-content-between px-0">
                    <img
                        width={231}
                        height={62}
                        src={Logo}
                        alt="Healthify"
                        className="brand-logo" />
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
                    <div className="collapse navbar-collapse justify-content-end mt-3" id="navbarNav">
                        <ul className="navbar-nav">
                            {menus.map((menu, index) => (
                                <li key={index} className="nav-item link-offset-3-hover mx-3">
                                    <a
                                        className={`fw-medium ${menu.href === hash ? 'nav-item-active' : 'nav-item-a'}`}
                                        href={menu.href}
                                    >
                                        {menu.label}
                                    </a>
                                </li>
                            ))
                            }
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    )
}