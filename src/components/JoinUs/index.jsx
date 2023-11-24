import Play from "../../assets/icon/Group.svg"
import "./JoinUs.css"

export const JoinUs = () => {
    return (
        <div id="joinUsSection" className="join mx-3">
            <div className="row justify-content-center align-items-center" style={{ paddingBottom: '11rem', paddingTop: '13rem' }}>
                <div className="d-flex flex-column justify-content-center text-center join-us card-box" style={{ maxWidth: '69.375rem', height: '20rem' }}>
                    <h2 className="fw-semibold">Ayo Bergabung Bersama Kami!</h2>
                    <p className="text-center mx-auto fw-semibold opacity-75" style={{ maxWidth: '32rem' }}>Semua orang bisa sehat. Penuhi kebutuhan sehatmu bersama kami. Kami siap melayani anda
                    </p>
                    <a href="https://play.google.com">
                        <img 
                        width={200}
                        height={58}
                        src={Play} 
                        alt="google play link" 
                        className="mt-2" />
                    </a>
                </div>
            </div>
        </div>
    )
}