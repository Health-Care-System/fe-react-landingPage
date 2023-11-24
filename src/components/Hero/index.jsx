import Play from "../../assets/icon/Group.svg"
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
        <section id={idSection} className="container-xxl px-4 px-lg-5 px-xxl-0 gap-5 gap-lg-0 d-flex flex-column flex-md-row justify-content-between mx-auto" style={{ padding: '4rem 0' }}>
            <div className={`${imageClass}`}>
                <img
                    src={image}
                    width={640}
                    height={360}
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
                    <a 
                        target="_blank" 
                        name={'googlePlayNavigation'} 
                        rel="noreferrer" 
                        aria-label='navigation to google playstore'
                        href="https://play.google.com">
                        <img 
                        src={Play} 
                        width={200}
                        height={58}
                        className="img-play" alt="" />
                    </a>
                )}
            </div>
        </section>
    )
}