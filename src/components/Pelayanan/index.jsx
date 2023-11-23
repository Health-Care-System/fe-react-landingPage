import Konsultasi from "../../assets/image/konsultasiDokter.png"
import Pembayaran from "../../assets/image/pembayaranVector.png"
import Medicine from "../../assets/image/ObatVector.png"
import Apotek from "../../assets/image/ApotekVector.png"
import "./Pelayanan.css"

export const Pelayanan = () => {
    const listPelayanan = [
        { img: Konsultasi, title: 'Konsultasi Semakin Mudah', content: 'Kami siap membantu kamu  untuk berkonsultasi dengan dokter supaya lebih mudah' },
        { img: Pembayaran, title: 'Pembayaran Lebih Fleksibel', content: 'Bayar konsultasi jadi lebih mudah dengan berbagai metode pembayaran yang bisa kamu pilih' },
        { img: Medicine, title: 'Produk Kesehatan Lengkap', content: 'Produk kesehatan tersedia secara lengkap. Temukan harga terjangkau untuk kamu' },
        { img: Apotek, title: 'Pelayanan Apotek Tersedia 24 Jam', content: 'Apotek 24 jam memudahkan kamu dalam membeli obat-obatan yang kamu butuhkan' },
    ]

    return (
        <div className="mt-5 mb-5 d-flex justify-content-center align-items-center">
            <div className="row gap-3">
                {listPelayanan?.map((item, index) => (
                    <div key={index} className="card mx-auto rounded-4 border-0 shadow d-flex align-items-center justify-content-center" style={{ maxWidth: '16.87rem' }}>
                        <img src={item.img} className="mt-4" alt="pembayaran" height={'190px'} />
                        <div className="card-body px-0 max-w-15">
                            <h5 className="card-title text-center text-primary fw-semibold">{item.title}</h5>
                            <p className="card-text px-0 text-center text-green-300 pb-3 fw-medium">
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