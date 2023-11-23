import { Link } from "react-router-dom"
import Play from "../../image/Group.svg"
import "./JoinUs.css"

export const JoinUs = () => {
    return (
        <div className="join">
            <div className="row justify-content-center align-items-center" style={{ paddingBottom: '11rem', paddingTop: '13rem' }}>
                <div className="d-flex flex-column justify-content-center text-center join-us card-box" style={{ maxWidth: '69.375rem', height: '20rem' }}>
                    <h2 className="fw-semibold">Ayo Bergabung Bersama Kami!</h2>
                    <p className="text-center mx-auto fw-semibold opacity-75" style={{ maxWidth: '32rem' }}>Semua orang bisa sehat. Penuhi kebutuhan sehatmu bersama kami. Kami siap melayani anda
                    </p>
                    <Link to="https://play.google.com">
                        <img src={Play} alt="play" className="mt-2" style={{ width: "200px" }} />
                    </Link>
                </div>
            </div>
        </div>
    )
}