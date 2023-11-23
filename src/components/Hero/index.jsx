import { Link } from "react-router-dom";
import Play from "../../image/Group.svg"
import "./Hero.css"
export const Hero = ({
    isReverse,
    heading,
    text,
    image,
    maxWTitle,
    showPlay,
    idSection
}) => {
    const imageClass = isReverse ? "order-md-last" : "order-md-first";
    return (
        <section id={idSection} className="container-xxl px-4 px-md-0 d-flex flex-column flex-md-row justify-content-between mx-auto" style={{ padding: '4rem 0' }}>
            <div className={`${imageClass}`}>
                <img
                    src={image}
                    className="hero-image img-fluid"
                    alt="Hero image"
                />
            </div>
            <div className="d-flex flex-column gap-2 justify-content-center" style={{ maxWidth: maxWTitle }}>
                <h1 className={` ${showPlay ? 'fw-bold' : 'fw-semibold'} hero-title text-primary poppins`}>
                    {heading}
                </h1>
                {text &&
                <p className="text-green-300 fw-medium">
                    {text}
                </p>
                }
                {showPlay && (
                    <Link to="https://play.google.com">
                        <img src={Play} className="img-play" alt="" />
                    </Link>
                )}
            </div>
        </section>
    )
}