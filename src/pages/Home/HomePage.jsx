import { Hero } from "../../components/Hero"
import { Navbar } from "../../components/Navbar"
import { Pelayanan } from "../../components/Pelayanan"
import { Testimoni } from "../../components/Testimoni"
import { JoinUs } from "../../components/JoinUs"
import { Footer } from "../../components/Footer"

import HeroDoc from "../../image/hero-doc.png"
import GirlPhone from "../../image/girl happy phone 1.png"
import AsianYoung from "../../image/asian-young.png"
import GooglePixel from "../../image/Google Pixel.png"

export const HomePage = () => {
  return (
    <div>
      <Navbar/>
      <Hero
         isReverse={true}
         image={HeroDoc}
         heading="Wujudkan Kesehatanmu Untuk Hidup Bahagia Kini Dan Nanti"
         text="Tubuh yang sehat adalah impian semua orang. Kami siap membantu menjaga tubuh Anda tetap sehat. Temukan solusi kesehatan untuk menciptakan kualitas hidup yang lebih baik."
         showPlay={true}
         backgroundColor="#F0F0F0"
      />
      <Pelayanan/>
      <Hero
         isReverse={false}
         image={GirlPhone}
         heading="Kemudahan Mengakses Layanan Kesehatan"
         text="Kami memahami betapa pentingnya akses mudah dan cepat ke layanan kesehatan. Dengan kami, Anda akan menemukan proses yang sederhana dan mudah untuk mendapatkan layanan yang Anda butuhkan."
         backgroundColor="#F0F0F0"
         textSubline="#07287C"
      />
      <Hero
         isReverse={true}
         image={AsianYoung}
         heading="Dokter Berpengalaman Siap Membantu"
         text="Konsultasi dengan Dokter berpengalaman kapan saja Anda butuhkan. Temukan konsultasi  medis yang tepat dan cepat dalam genggaman Anda."
      />
      <Hero
         isReverse={false}
         image={GooglePixel}
         heading="Fitur Kesehatan Lengkap Untuk Kamu"
         text="Pantau dan tingkatkan gaya hidup Anda dengan fitur-fitur canggih yang dirancang untuk memenuhi kebutuhan kesehatan Anda."
         showPlay={true}
         backgroundColor="#F0F0F0"
      />
      <Testimoni/>
      <JoinUs/>
      <Footer/>
    </div>
  )
}
