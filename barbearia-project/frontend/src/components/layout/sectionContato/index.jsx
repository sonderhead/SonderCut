import './style.css'
import React from 'react'
import instagram from '../../../assets/images/instagram.svg'
import whatsapp from '../../../assets/images/whatsapp.svg'

export function SectionContato() {
    return (
        <div className='section-contato'>
            <h1>Contato</h1>

            <div className='contato-container'>

                <div>
                    <h3>Endereço</h3>
                    <p>R. Dr. Antônio Bento, 393 Santo Amaro, SP</p>
                </div>

                <div>
                    <h3>Horários</h3>
                    <p>Ter. a Sex. 10h às 21h Sab. 10h às 17h</p>
                </div>

                <div>
                    <h3>Telefone</h3>
                    <p>(11) 99543-0978 (11) 2234-7896</p>
                </div>
            </div>

            <div className='socials-icons'>

                <img className='instagram-icon' src={instagram} alt="instagram button" />
                <a href="url_do_instagram" target="_blank" rel="noopener noreferrer"></a>

                <img className='whatsapp-icon' src={whatsapp} alt="whatsapp button" />
                <a href="url_do_whatsapp" target="_blank" rel="noopener noreferrer"></a>

            </div>
        </div>


    )
}