import gmail from '../../image/mail.svg'
import Logo from '../../image/logo-health.png'
import insta from '../../image/instagram.svg'
import phone from '../../image/phone.svg'
import Play from "../../image/Group.svg"
import { Link } from 'react-router-dom'
import "./Footer.css"

export const Footer = () => {
    return (
        <div className="footer">
        <div className="container">
            <footer className="py-5">
                <div className="row">
                    <div className="d-flex align-items-center mb-3">
                        <a href="/" className="mb-3 me-2 mb-md-0 text-body-secondary text-decoration-none lh-1">
                            <img src= {Logo} alt="Bootstrap" width={80} height={62}  />
                        </a>
                        <h3 style={{color: "#149BDB"}}>Healthify</h3>
                    </div> 

                    <div className="col-6 col-md-2 p-2 mb-3" >
                        <h5>Sitemap</h5>
                        <ul className="nav flex-column">
                        <li className="nav-item mb-2">
                            <a href="#" className="nav-link p-0 text-white">
                            FAQ
                            </a>
                        </li>
                        <li className="nav-item mb-2">
                            <a href="#" className="nav-link p-0 text-white">
                            Blog
                            </a>
                        </li>
                        <li className="nav-item mb-2">
                            <a href="#" className="nav-link p-0 text-white">
                            Syarat & Ketentuan
                            </a>
                        </li>
                        <li className="nav-item mb-2">
                            <a href="#" className="nav-link p-0 text-white">
                            Kebijakan Privasi
                            </a>
                        </li>
                        </ul>
                    </div>

                    <div className="col-6 col-md-2 p-2 mb-3">
                        <h5>Perusahaan</h5>
                        <ul className="nav flex-column">
                        <li className="nav-item mb-2">
                            <a href="#" className="nav-link p-0 text-white">
                            Tentang Kami
                            </a>
                        </li>
                        <li className="nav-item mb-2">
                            <a href="#" className="nav-link p-0 text-white">
                            Layanan
                            </a>
                        </li>
                        <li className="nav-item mb-2">
                            <a href="#" className="nav-link p-0 text-white">
                            Produk
                            </a>
                        </li>
                        </ul>
                    </div>

                    <div className="col-6 col-md-2 p-2 me-3 mb-3">
                        <h5>Hubungi Kami</h5>
                        <ul className="nav flex-column">
                            <li className="nav-item mb-2">
                                <a href="#" className="nav-link p-0 text-white d-flex">
                                <img src= {gmail} alt="Bootstrap" className="me-1" width={20} height={24}/>
                                    healthify@gmail.com
                                </a>
                            </li>
                            <li className="nav-item mb-2">
                                <a href="#" className="nav-link p-0 text-white d-flex">
                                <img src= {insta} alt="Bootstrap" className="me-1" width={20} height={24}/>
                                    healthify_healthcare
                                </a>
                            </li>
                            <li className="nav-item">
                                <a href="#" className="nav-link p-0 text-white d-flex">
                                <img src= {phone} alt="Bootstrap" className="me-1" width={20} height={24}/>
                                    +62-345-678-910
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div className="col-6 col-md-4 p-2 mx-3 mb-3" >
                        <h5>Layanan Pengaduan Konsumen</h5>
                        <h4>PT Sentra Sehat Sentosa</h4>
                        <p>Jl. H.R. Rasuna Said Kav b32-33. Jakarta Selatan 021-2233-4515</p>
                        <p>Direktorat Jenderal Perlindungan Konsumen dan
                            Tertib Niaga Kementrian Perdagangan Republik Indonesia<br></br> 
                            0853 1111 1010 (WhatsApp)</p>
                    </div>

                    <div className="col-6 col-md-1 p-2 mb-3">
                        <h5>Download Aplikasi di</h5>
                        <Link to="https://play.google.com">
                            <img src={Play} alt="play" className="mt-2" style={{width:"130px"}} />
                        </Link>
                    </div>
                </div>
                
                <div className="d-flex flex-column border-top">
                    <p className="text-center text-white mt-3">Copyright © Healthify 2023</p>
                </div>
            </footer>
        </div>
        </div>
    )
}