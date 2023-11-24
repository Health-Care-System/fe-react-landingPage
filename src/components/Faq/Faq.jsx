import { Accordion } from "../Acordion"

export const Faq = () => {
  const data = [
    { id: 'healthifyIntro', title: 'Apa itu Healthify ?', content: 'Healthify adalah platform kesehatan yang menyediakan berbagai layanan, termasuk konsultasi dokter online, informasi kesehatan, dan akses ke apotek online.' },
    { id: 'healthifyRegister', title: 'Bagaimana cara saya mendaftar di Healthify ?', content: 'Healthify adalah platform kesehatan yang menyediakan berbagai layanan, termasuk konsultasi dokter online, informasi kesehatan, dan akses ke apotek online.' },
    { id: 'healthifyConsult', title: 'Bagaimana cara berkonsultasi dengan dokter ?', content: 'Healthify adalah platform kesehatan yang menyediakan berbagai layanan, termasuk konsultasi dokter online, informasi kesehatan, dan akses ke apotek online.' },
    { id: 'healthifyDrug', title: 'Bagaimana cara memesan obat di apotek online?', content: 'Healthify adalah platform kesehatan yang menyediakan berbagai layanan, termasuk konsultasi dokter online, informasi kesehatan, dan akses ke apotek online.' },
  ]

  return (
    <section id="faqSection" className="container" style={{ paddingTop: '9rem'}}>
      <div className="text-center" style={{ marginBottom: '3rem' }}>
        <h3 className="fw-bold mt-5 text-primary fs-2">Frequently Asked Question</h3>
        <div className="col-lg-6 mx-auto">
          <p className="lead text-green-300">
            Apa aja pertanyaan mereka soal Healthify ?
          </p>
        </div>
      </div>

      <div className="accordion d-flex flex-column gap-3 justify-content-center  align-items-center" id="accordionPanelsStayOpenExample">
        {data?.map((item, index) => (
          <Accordion
            key={index}
            id={item.id}
            title={item.title}
            content={item.content}
          />
        ))
        }
      </div>
    </section>
  )
}
