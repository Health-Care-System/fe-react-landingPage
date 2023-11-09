import Konsultasi from "../../image/Konsultasi Dokter.png"
import Pembayaran from "../../image/Pembayaran 2.png"
import Medicine from "../../image/Medicine.png"
import Apotek from "../../image/apotek.png"
import "./Pelayanan.css"

export const Pelayanan = () => {
    const listPelayanan = [
        { img: Konsultasi, title: 'Konsultasi Semakin Mudah', content: 'Kami siap membantu kamu  untuk berkonsultasi dengan lebih mudah.' },
        { img: Pembayaran, title: 'Pembayaran Lebih Fleksibel', content: 'Kini tersedia berbagai metode pembayaran yang bisa kamu pilih.' },
        { img: Medicine, title: 'Produk Kesehatan Lengkap', content: 'Produk kesehatan tersedia secara lengkap. Temukan harga terjangkau untuk kamu.' },
        { img: Apotek, title: 'Pelayanan Apotek 24 Jam', content: 'Apotek 24 jam memudahkan kamu dalam membeli obat-obatan yang kamu butuhkan.' },
    ]

    return (
        <div className="mt-5 mb-5 d-flex justify-content-center align-items-center">
            <div className="d-flex flex-column flex-md-row flex-wrap gap-3 align-items-center justify-content-center w-100 mx-auto">
                {listPelayanan?.map((item, index) => (
                    <div key={index} className="card rounded-4 border-0 shadow d-flex align-items-center justify-content-center" style={{ height: "412px", width: '16.87rem' }}>
                        <img src={item.img} className="mt-4" alt="pembayaran" height={'190px'} />
                        <div className="card-body">
                            <h5 className="card-title text-center text-secondary fw-semibold">{item.title}</h5>
                            <p className="card-text text-center text-subline">
                                {item.content}
                            </p>
                        </div>
                    </div>
                ))
                }
            </div>  
        </div>
    )
}