import profile from '../../image/profile.svg'
import "./Testimoni.css"

export const Testimoni = () => {
    return (
        <div className="container">
            <div className="text-center">
            <h3 className="fw-bold mt-5" style={{ color: '#E3E3E3' }}>Apa Kata Mereka ?</h3>
                <div className="col-lg-6 mx-auto">
                    <p className="lead mb-4 text-subline">
                    Bersama-sama jalani hidup sehat
                    </p>
                </div>
            </div>

         
            <div className="row justify-content-center" style={{ padding: '32px'}}>
                <div className="col-md-6">
                    <div className="h-100 p-5 text-bg-white testimoni-box">
                    <p className="text-subline">Layanan sangat bagus sekali, teman saya yang gila slot kini udah sembuh kembali. Terimakasih Dokter. Semoga panjang umur dan sehat selalu.</p>
                    <div className='d-flex align-items-center'>
                        <a href="#" className="nav-link p-0 text-body-secondary">
                            <img src= {profile} alt="Bootstrap" width={72} height={72}  />
                        </a>
                        <div style={{ marginLeft: '15px', marginTop: '20px', color: '#E3E3E3'}}>
                            <h6>Joko Widodo</h6>
                            <p> Presiden RI</p>
                        </div>
                    </div>   
                    </div>
                </div>

                <div className="col-md-6" >
                <div className="h-100 p-5 text-bg-white testimoni-box" >
                    <p className="text-subline">Layanan sangat bagus sekali, teman saya yang gila slot kini udah sembuh kembali. Terimakasih Dokter. Semoga panjang umur dan sehat selalu.</p>
                    <div className='d-flex align-items-center'>
                        <a href="#" className="nav-link p-0 text-body-secondary">
                            <img src= {profile} alt="Bootstrap" width={72} height={72}  />
                        </a>
                        <div style={{ marginLeft: '15px', marginTop: '20px', color: '#E3E3E3'}}>
                            <h6>Prabowo Subianto</h6>
                            <p>Menteri Pertahanan</p>
                        </div>
                    </div>   
                    </div>
                </div>
            </div>


            <div className="row justify-content-center" style={{padding: '32px'}}>
                <div className="col-md-6">
                    <div className="h-100 p-5 text-bg-white  testimoni-box">
                    <p className="text-subline">Layanan sangat bagus sekali, teman saya yang gila slot kini udah sembuh kembali. Terimakasih Dokter. Semoga panjang umur dan sehat selalu.</p>
                    <div className='d-flex align-items-center'>
                        <a href="#" className="nav-link p-0 text-body-secondary">
                            <img src= {profile} alt="Bootstrap" width={72} height={72}  />
                        </a>
                        <div style={{ marginLeft: '15px', marginTop: '20px', color: '#E3E3E3'}}>
                        <h6>Ganjar Pranowo</h6>
                        <p>Calon Presiden RI</p>
                        </div>
                    </div>   
                    </div>
                </div>

                <div className="col-md-6">
                <div className="h-100 p-5 text-bg-white  testimoni-box">
                    <p className="text-subline">Layanan sangat bagus sekali, teman saya yang gila slot kini udah sembuh kembali. Terimakasih Dokter. Semoga panjang umur dan sehat selalu.</p>
                    <div className='d-flex align-items-center'>
                        <a href="#" className="nav-link p-0 text-body-secondary">
                            <img src= {profile} alt="Bootstrap" width={72} height={72}  />
                        </a>
                        <div style={{ marginLeft: '15px', marginTop: '20px', color: '#E3E3E3'}}>
                        <h6>Megawati Soekarno Putri</h6>
                        <p>Presiden Ke-5 RI</p>
                        </div>
                    </div>   
                    </div>
                </div>
            </div>

         
     </div>
    )
}