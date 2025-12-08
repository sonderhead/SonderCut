import ServicePic from '../../../assets/images/services.svg'
import ServicePic1 from '../../../assets/images/services-1.svg'
import ServicePic2 from '../../../assets/images/services-2.svg'
import ServicePic3 from '../../../assets/images/services-3.svg'
import './style.css'


export const SectionNossosServicos = () => {
    return (
        <section className='section-nossos-servicos'>
            <h2>Nossos <span className='highlighted-word'>Serviços</span></h2>
            <div className='services-container'>
                <img src={ServicePic} alt="corte de cabelo" />
                <img src={ServicePic1} alt="nanopigmentação" />
                <img src={ServicePic2} alt="massagem" />
                <img src={ServicePic3} alt="Barba e Depilação" />
            </div>

            <div className='services-titles'>
                <h3>Corte de cabelo</h3>
                <h3>Nanopigmentação</h3>
                <h3>Massagem</h3>
                <h3>Barba & Depilação</h3>
            </div>

            <div className='services-descriptions'>
                <p className='first-paragraph'>Corte preciso, alinhado ao seu estilo e rotina.</p>
                <p className='first-paragraph'>Cobertura duradoura e natural para fios brancos</p>
                <p className='first-paragraph'>Alivie o estresse e a tensões com nossa maestria.</p>
                <p className='first-paragraph'>Design, acabamento, e cuidado com técnicas. </p>
            </div>


        </section>
    )
}