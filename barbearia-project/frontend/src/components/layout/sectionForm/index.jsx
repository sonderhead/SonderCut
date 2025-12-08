import { useState } from 'react';
import axios from 'axios';
import './style.css';
import OwnerAgendar from '../../../assets/images/Owner-agendar.svg'



export const SectionForm = () => {
    const [nome, setNome] = useState()
    const [servico, setServico] = useState()
    const [horario, setHorario] = useState()
    const [data, setData] = useState()

    const cadastro = () => {
        const cadastroNovo = {
            nome: nome,
            servicos: servico,
            data: data,
            horario: horario,
        }
        axios.post('http://localhost:8081/cadastrar', cadastroNovo)
            .then((res) => {
                console.log(res.data)                
            })
            .catch((err) => console.log(err))
    }



    return (
        <section className="Agendar-section">
            <div className="layout-container">
                <div className="barber-img-container">
                    <img src={OwnerAgendar} alt="" />
                </div>

                <div className="form-container">

                    <form className="contato-form">
                        <div className="input-container">
                            <label htmlFor="name" className="form-label">Nome</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={nome}
                                onChange={(e) => setNome(e.target.value)}
                                className="form-input"
                            />

                            <label htmlFor="service" className="form-label">Serviços</label>
                            <input
                                type="text"
                                id="service"
                                name="service"
                                value={servico}
                                onChange={(e) => setServico(e.target.value)}
                                className="form-input"
                            />
                        </div>

                        <div className='data-container'>
                            <div>
                                <label htmlFor="data" className="form-label">Dia:</label>
                                <input
                                    type="date"
                                    id="data"
                                    name="data"
                                    value={data}
                                    onChange={(e) => setData(e.target.value)}
                                    className="form-input"
                                />
                            </div>
                        </div>
                        <div>
                            <label htmlFor="horario" className="form-label">Horário:</label>
                            <input
                                type="time"
                                id="horario"
                                name="horario"
                                value={horario}
                                onChange={(e) => setHorario(e.target.value)}
                                className="form-input"
                            />
                        </div>

                        <div className="btn-enviarForm"></div>

                        <button type="submit" className="btn-enviar" onClick={(E) => {E.preventDefault(); cadastro()}}>
                            Agendar
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};
