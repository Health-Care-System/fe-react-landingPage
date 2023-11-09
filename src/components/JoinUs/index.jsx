import { Link } from "react-router-dom"
import Play from "../../image/Group.svg"
import "./JoinUs.css"

export const JoinUs = () => {
    return (
      <div className="join">
        <div className="row justify-content-center align-items-center" style={{ height: "100vh" }}>
            <div className="col-md-9">
                <div className="h-100 p-5 text-center card-box">
                    <h2 >Mari Bergabung Bersama Kami!</h2>
                    <p>
                    Semua orang bisa sehat. Penuhi kebutuhan sehatmu bersama kami. <br></br>
                    Kami siap melayani anda
                    </p>
                    <Link to="https://play.google.com">
                        <img src={Play} alt="play" className="mt-2" style={{width:"200px"}} />
                    </Link>
                </div>
            </div>
        </div>
      </div>
    )
}