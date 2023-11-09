import { Link } from "react-router-dom";
import Play from "../../image/Group.svg"
import "./Hero.css"

// eslint-disable-next-line react/prop-types
export const Hero = ({ isReverse, heading, text, image, showPlay, backgroundColor, textSubline }) => {
    const imageClass = isReverse ? "order-lg-last" : "order-lg-first";
    const heroStyle = { backgroundColor: backgroundColor };
    const textSub = {textSubline: textSubline};

    return (
      <div style={heroStyle} className="text-poppins">
        <div className="container px-4 py-5">
            <div className="py-5 hero-body">
                <div className={`${imageClass} image`}>
                    <img
                        src={image}
                        className="hero-image"
                        alt="Bootstrap Themes"
                    />
                </div>
                <div className="col-lg-7 hero-text">
                    <h1 className="fw-bold text-body-emphasis mb-3">
                        {heading}
                    </h1>
                    <p style={textSub}>
                        {text}
                    </p>
                    <div className="d-grid gap-2 mt-4">
                        {showPlay && (
                            <Link to="https://play.google.com">
                                <img src={Play} className="img-play" alt="" />
                            </Link>
                        )}
                    </div>
                </div>
            </div>
        </div>
      </div>
    )
  }