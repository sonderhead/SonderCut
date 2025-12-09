import { useState } from 'react';
import axios from 'axios';
import './style.css';
import OwnerAgendar from '../../../assets/images/Owner-agendar.svg';

export const SectionForm = () => {
    const [nome, setNome] = useState("");
    const [servico, setServico] = useState("");
    const [horario, setHorario] = useState("");
    const [data, setData] = useState("");

    const cadastro = (e) => {
        e.preventDefault(); // validação HTML já aconteceu antes disto

        const cadastroNovo = {
            nome,
            servicos: servico,
            data,
            horario,
        };

        axios.post('https://sondercut-back.onrender.com/cadastrar', cadastroNovo)
            .then((res) => {
                alert("Agendamento realizado com sucesso");
                console.log(res.data);
            })
            .catch((err) => console.log(err));
    };

    return (
        <section className="Agendar-section">
            <div className="layout-container">
                <div className="barber-img-container">
                    <img src={OwnerAgendar} alt="" />
                </div>

                <div className="form-container">
                    
                    <form className="contato-form" onSubmit={cadastro}>

                        <div className="input-container">
                            <label htmlFor="name" className="form-label">Nome</label>
                            <input
                                required
                                type="text"
                                id="name"
                                name="name"
                                value={nome}
                                onChange={(e) => setNome(e.target.value)}
                                className="form-input"
                            />

                            <label htmlFor="service" className="form-label">Serviços</label>
                            <input
                                required
                                type="text"
                                id="service"
                                name="service"
                                value={servico}
                                onChange={(e) => setServico(e.target.value)}
                                className="form-input"
                            />
                        </div>

                        <div className="data-container">
                            <div>
                                <label htmlFor="data" className="form-label">Dia:</label>
                                <input
                                    required
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
                                required
                                type="time"
                                id="horario"
                                name="horario"
                                value={horario}
                                onChange={(e) => setHorario(e.target.value)}
                                className="form-input"
                            />
                        </div>

                        <div className="btn-enviarForm"></div>

                
                        <button type="submit" className="btn-enviar">
                            Agendar
                        </button>

                    </form>
                </div>
            </div>
        </section>
    );
};
