import { Faq } from './components/Faq/Faq'
import { Footer } from './components/Footer'
import { Hero } from './components/Hero'
import { JoinUs } from './components/JoinUs'
import { Pelayanan } from './components/Pelayanan'
import { Testimoni } from './components/Testimoni'
import HeroDoc from './assets/image/hero1.png'
import mockup3phone from './assets/image/Mockup1.png'
import obatOnline from './assets/image/obatOnline.png'
import konsultasi from './assets/image/konsultasi.png'
import mockupMobileApp from './assets/image/mockupMobileApp.png'
import nabung from './assets/image/nabung.png'
import androidVector from './assets/image/androidVector.png'
import { Navbar } from './components/Navbar'
function App() {
  return (
    <>
      <Navbar/>
      <main>
      <Hero
         isReverse={true}
         image={HeroDoc}
         heading="Wujudkan Kesehatanmu Untuk Hidup Bahagia Kini Dan Nanti"
         text="Tubuh yang sehat adalah impian semua orang. Kami siap membantu menjaga tubuh Anda tetap sehat. Temukan solusi kesehatan untuk menciptakan kualitas hidup yang lebih baik."
         showPlay={true}
         maxWTitle={'41.625rem'}
      />
      <Hero
         isReverse={false}
         image={mockup3phone}
         heading="Wujudkan Hidup Sehat Bersama Healthify !"
         text="Wujudkan perjalanan menuju hidup sehatmu bersama Healthify. Coba Healthify dari smartphone-mu sekarang. Dapatkan berbagai kemudahan konsultasi dengan dokter umum dan spesialis, dan kamu juga bisa beli obat secara online tanpa ribet !"
         showPlay={false}
         maxWTitle={'38.75rem'}
      />
      <Hero
         isReverse={true}
         image={obatOnline}
         heading="Cari Obat-Obatan Online Tanpa Ribet"
         text="Obat-obatan terlengkap dan tentunya 24 jam. Cocok untuk kamu yang butuh obat-obatan kapanpun dan dimanapun. Healthify paling mengerti kamu !"
         showPlay={false}
         maxWTitle={'41.4375rem'}
      />
      <Hero
         isReverse={false}
         image={konsultasi}
         heading="Butuh Konsultasi ? Dokter Selalu Ada Buat Kamu "
         text="Kami memahami betapa pentingnya akses mudah dan cepat ke layanan kesehatan. Dengan kami, Anda akan menemukan proses yang sederhana dan mudah untuk mendapatkan layanan yang Anda butuhkan."
         showPlay={false}
         maxWTitle={'41.4375rem'}
      />
      <Pelayanan/>
      <Hero
         isReverse={true}
         image={mockupMobileApp}
         heading="Pilih Dokter Sesuai Dengan Kebutuhan Kamu"
         text="Tersedia Dokter Umum dan Dokter Spesialis untuk kamu. Pantau dan tingkatkan gaya hidup kamu dengan fitur-fitur canggih yang dirancang untuk memenuhi kebutuhan kesehatan kamu."
         maxWTitle={'41.4375rem'}
      />
      <Hero
         isReverse={false}
         image={nabung}
         heading="Hemat Waktu dan Hemat Biaya"
         text="Di Healthify, kamu bisa menemukan kebutuhan kesehatanmu dengan mudah dan cepat, dan tentunya dengan harga yang terjangkau."
         maxWTitle={'37.5rem'}
      />
      <Hero
         isReverse={true}
         image={androidVector}
         heading="Download Sekarang dan Mulai Hidup Sehat !"
         text={null}
         maxWTitle={'37.5rem'}
         showPlay={true}
      />
      <Testimoni/>
      <Faq />
      <JoinUs/>
      </main>
      <Footer/>
    </>
  )
}

export default App
