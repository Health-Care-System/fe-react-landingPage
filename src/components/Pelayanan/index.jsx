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
        <div className="my-10 d-flex justify-content-center align-items-center overflow-x-hidden pb-5 mx-3">
            <div className="row gap-3 row-cols-1 justify-content-center" >
                {listPelayanan?.map((item, index) => (
                    <div key={index} className="card col rounded-4 border-0 shadow d-flex align-items-center justify-content-center" style={{ maxWidth: '16.87rem' }}>
                        <img 
                            src={item.img} 
                            className="mt-4" 
                            alt="pembayaran" 
                            width={193}
                            height={193}
                             />
                        <div className="card-body px-1 max-w-15">
                            <h5 className="card-title text-center text-primary fw-semibold">{item.title}</h5>
                            <p className="card-text text-center text-green-300 pb-3 fw-medium">
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
