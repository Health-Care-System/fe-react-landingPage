import "./Testimoni.css"
import sumanto from '../../assets/image/Sumanto_Abrori.png'
import alan from '../../assets/image/Alan_ritchson.png'
import ferdy from '../../assets/image/Ferdy_Sambo.png'
import mawar from '../../assets/image/Mawar_Eva.png'

export const Testimoni = () => {
    return (
        <div id="testimoniSection" className="container">
            <div className="text-center mb-md-5">
                <h3 className="fw-bold mt-5 text-primary fs-2">Apa Kata Mereka ?</h3>
                <div className="col-lg-6 mx-auto">
                    <p className="lead text-green-300">
                        Bersama-sama jalani hidup sehat
                    </p>
                </div>
            </div>


            <div className="row justify-content-center mx-auto" style={{ maxWidth: '67rem'}} >
                <TestimoniUser
                    profile={sumanto}
                    name={'Sumanto Abrori'}
                    profession={'Wiraswasta'}
                    content={'Layanan sangat bagus sekali, teman saya yang gila slot kini udah sembuh kembali. Terimakasih Dokter. Semoga panjang umur dan sehat selalu.'}
                />
                <TestimoniUser
                    profile={alan}
                    name={'Alan Ritchson'}
                    profession={'Aktor'}
                    content={'Kalo kemarin saya ada sakit di bagian perut samping. Saya konsultasi di aplikasi ini dan mendapatkan obatnya, terima kasih !'}
                />
            </div>


            <div className="row justify-content-center mt-md-4 mx-auto" style={{ maxWidth: '67rem'}}>
                <TestimoniUser
                    profile={ferdy}
                    name={'Ferdinand Shambo'}
                    profession={'Kadiv Propam'}
                    content={'Aplikasi ini sangat membantu saya apalagi ketika mengobati luka tembak anggota saya. Terima kasih untuk dokter di aplikasi ini!'}
                />
                <TestimoniUser
                    profile={mawar}
                    name={'Mawar Eva'}
                    profession={'Penyanyi'}
                    content={'Aku baru aja konsultasi karena aku merasa sakit di bagian tenggorokan karena sering bernyanyi. Sekarang udah lega banget !'}
                />
            </div>
        </div>
    )
}

const TestimoniUser = ({ name, profession, content, profile }) => {
    return (
        <>
            <div className="col-md-6 mt-4 mt-md-0">
                <div className="h-100 text-bg-white testimoni-box">
                    <p className="text-green-300 fs-5">{content}</p>
                    <div className='d-flex align-items-center'>
                        <img className="avatar" src={profile} alt="Profile Picture" width={72} height={72} />
                        <div style={{ marginLeft: '15px', marginTop: '20px', color: '#E3E3E3' }}>
                            <h6 className='text-primary fw-bold fs-5'>{name}</h6>
                            <p className='fs-7 text-primary'>{profession}</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}