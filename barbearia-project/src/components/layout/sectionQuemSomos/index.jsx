import OwnerImage from '../..//../assets/images/Onwer-pic.svg'
import './style.css'


export const SectionQuemSomos = () => {
    return (
        <section className='section-que-somos'>
        <img className='owner-image' src= {OwnerImage} alt="" />

        <div className='text-quem-somos'>
            <h2>Quem Somos?</h2>
            <p className='paragrafo-1'>A ideia e a fundação da barbearia pertencem a Elias "Lia" Santos, um barbeiro visionário e um fervoroso apreciador de música R&B, cuja paixão por criar e contar histórias através do estilo inspirou o conceito. Elias inaugurou a Sonder Cut em 15 de Setembro de 2023, com o objetivo de criar um local onde a precisão técnica da barbearia se fundisse com a atmosfera acolhedora e profunda da música que o inspira.</p>
            <p className='paragrafo-2'>O nome, Sonder Cut, é uma homenagem direta à profundidade e autenticidade que o artista Sonder nos presenteia em cada nota. "Sonder" (o conceito de que cada pessoa aleatória que passa tem uma vida tão complexa quanto a sua) reflete nossa crença: cada cliente que se senta em nossas cadeiras é uma história esperando para ser contada.</p>
        </div>

        </section>
    )
}