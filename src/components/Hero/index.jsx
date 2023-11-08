import { Link } from "react-router-dom";
import Play from "../../image/Group.svg"
import "./Hero.css"

export const Hero = ({ isReverse, heading, text, image, showPlay, backgroundColor, textSubline }) => {
    const imageClass = isReverse ? "order-lg-last" : "order-lg-first";
    const heroStyle = { backgroundColor: backgroundColor };
    const textSub = {textSubline: textSubline};

    return (
      <div style={heroStyle} className="text-poppins">
        <div className="container col-xxl-8 px-4 py-5">
            <div className="row g-5 py-5">
                <div className={`col-10 col-sm-8 col-lg-5 ${imageClass}`}>
                    <img
                        src={image}
                        className="d-block mx-lg-auto img-fluid"
                        alt="Bootstrap Themes"
                        width={300}
                        height={200}
                        loading="lazy"
                    />
                </div>
                <div className="col-lg-7">
                    <h1 className="display-6 fw-bold text-body-emphasis lh-1 mb-3">
                        {heading}
                    </h1>
                    <p style={textSub}>
                        {text}
                    </p>
                    <div className="d-grid gap-2 d-md-flex mt-5 justify-content-md-start">
                        {showPlay && (
                            <Link to="https://play.google.com">
                                <img src={Play} alt="" />
                            </Link>
                        )}
                    </div>
                </div>
            </div>
        </div>
      </div>
    )
  }