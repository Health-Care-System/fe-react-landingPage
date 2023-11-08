import Konsultasi from "../../image/Konsultasi Dokter.png"
import Pembayaran from "../../image/Pembayaran 2.png"
import Medicine from "../../image/Medicine.png"
import Apotek from "../../image/Apotek.png"
import "./Pelayanan.css"

export const Pelayanan = () => {
    return (
      <div className="mt-5 mb-5 d-flex justify-content-center align-items-center">
        <div className="container p-0 m-5 m-md-4 row">
            <div className="col">
                <div className="card" style={{height:"412px"}}>
                    <img src={Konsultasi} className="card-img-top" alt="pembayaran"/>
                    <div className="card-body">
                        <h5 className="card-title text-center text-secondary">Konsultasi Semakin Mudah</h5>
                        <p className="card-text text-center text-subline">
                            Kami siap membantu kamu  untuk berkonsultasi dengan lebih mudah.
                        </p>
                    </div>
                </div>
            </div>
            <div className="col">
                <div className="card" style={{height:"413px"}}>
                    <img src={Pembayaran} className="card-img-top" alt="pembayaran"/>
                    <div className="card-body">
                        <h5 className="card-title text-center text-secondary">Pembayaran Lebih Fleksibel</h5>
                        <p className="card-text text-center text-subline">
                            Kini tersedia berbagai metode pembayaran yang bisa kamu pilih.
                        </p>
                    </div>
                </div>
            </div>
            <div className="col">
                <div className="card" style={{height:"414px"}}>
                    <img src={Medicine} className="card-img-top" alt="medicine" style={{width: 200, height: 205, padding: 20}}/>
                    <div className="card-body">
                        <h5 className="card-title text-center text-secondary">Produk Kesehatan Lengkap</h5>
                        <p className="card-text text-center text-subline">
                            Produk kesehatan tersedia secara lengkap. Temukan harga terjangkau untuk kamu.
                        </p>
                    </div>
                </div>
            </div>
            <div className="col">
                <div className="card">
                    <img src={Apotek} className="card-img-top" alt="apotek" style={{width: 200, height: 205, padding: 20}}/>
                    <div className="card-body">
                        <h5 className="card-title text-center text-secondary">Pelayanan Apotek 24 Jam</h5>
                        <p className="card-text text-center text-subline">
                            Apotek 24 jam memudahkan kamu dalam membeli obat-obatan yang kamu butuhkan.
                        </p>
                    </div>
                </div>
            </div>
            
        </div>

      </div>
    )
  }