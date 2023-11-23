import gmail from '../../image/mail.svg'
import Logo from '../../assets/icon/brandLogo.png'
import insta from '../../image/instagram.svg'
import phone from '../../image/phone.svg'
import Play from "../../image/Group.svg"
import "./Footer.css"

export const Footer = () => {
    const company = ['Tentang Kami', 'Layanan', 'Produk']
    const callUs = [
        { icon: gmail, label: 'healthify@gmail.com' },
        { icon: insta, label: 'healthify_healthcare' },
        { icon: phone, label: '+62-345-678-910' },
    ]

    return (
        <footer className='bg-green-300 text-white'>
            <div className='mx-auto' style={{ maxWidth:'86rem'}}>
                <div className="pt-5 pb-3 mx-4">
                    <a href="#">
                        <img src={Logo} alt="Bootstrap" />
                    </a>
                    <div className="row mt-3">
                        <ListItem data={company} title={'Perusahaan'} haveImage={false} />
                        <ListItem data={callUs} title={'Hubungi Kami'} haveImage={true} />
                        <div className="col-xl-6 col-md-6 mb-4 mb-md-0" >
                            <h5 className='fw-semibold'>Layanan Pengaduan Konsumen</h5>
                            <h5 className='fw-semibold'>PT Sentra Sehat Sentosa</h5>
                            <address className='flex-wrap' style={{ maxWidth: '27.3rem'}}>
                                <p>Jl. H.R. Rasuna Said Kav b32-33. Jakarta Selatan 021-2233-4515</p>
                                <p className='m-0'>Direktorat Jenderal Perlindungan Konsumen dan</p>
                                <p className='m-0'>Tertib Niaga Kementrian Perdagangan Republik Indonesia</p>
                                <p className='m-0'>0853 1111 1010 (WhatsApp)</p>
                            </address>
                        </div>
                        <div className="col-xl-2 col-md-6 mb-4 mb-md-0">
                            <h5>Download Aplikasi di</h5>
                            <a href="https://play.google.com">
                                <img src={Play} alt="play" className="mt-2 mb-md-3 image-play" />
                            </a>
                        </div>
                    </div>

                    <div className="border-top">
                        <p className="text-center text-white mt-3">Copyright © Healthify 2023</p>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export const ListItem = ({ data, title, haveImage }) => {
    return (
        <>
            <div className="col-xl-2 col-md-6 mb-4 mb-md-4 mb-lg-0">
                <h5 className=' fw-semibold'>{title}</h5>
                <ul className="nav flex-column">
                    {data?.map((item, index) => (
                        <li key={index} className="nav-item mb-2">
                            <a href="#" className="nav-link p-0 text-white">
                                {haveImage
                                    ? <>
                                        <img src={item.icon} alt={item.label} className="me-2" height={24} />
                                        {item.label}
                                    </>
                                    : item
                                }

                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    )
}