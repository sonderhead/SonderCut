import ambiente1 from '../../../assets/images/ambiente1.svg'
import ambiente2 from '../../../assets/images/ambiente2.svg'
import ambiente3 from '../../../assets/images/ambiente3.svg'
import ambiente4 from '../../../assets/images/ambiente4.svg'
import ambiente5 from '../../../assets/images/ambiente5.svg'
import './style.css'

export const Main = () => {
    return (
        <main>
            <section className='ambiente'>
                <h1>Conheça nosso ambiente:</h1>

                <div className='container-ambiente'>
                    <img className='ambiente-card' src={ambiente1} alt="" />
                    <img className='ambiente-card' src={ambiente2} alt="" />
                    <img className='ambiente-card' src={ambiente3} alt="" />

                </div>

                <div className='container-ambiente2'>
                    <img className='ambiente-card2' src={ambiente4} alt="" />
                    <img className='ambiente-card2' src={ambiente5} alt="" />
                </div>

            </section>

        

        </main>
    )
}