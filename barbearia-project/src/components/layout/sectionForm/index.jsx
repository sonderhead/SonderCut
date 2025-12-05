import { useState } from 'react';
import './style.css';
import OwnerAgendar from '../../../assets/images/Owner-agendar.svg'


export const SectionForm = () => {
    const [form, setForm] = useState({
        name: '',
        service: '',
        horario: '',
        data: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!form.name || !form.service || !form.horario || !form.data) {
            alert("Preencha os campos obrigatórios.");
            return;
        }

        console.log("Form enviado:", form);
        alert("Mensagem enviada!");

        setForm({
            name: '',
            service: '',
            horario: '',
            data: ''
        });
    };

    return (
        <section className="Agendar-section">
            <div className="layout-container">
                <div className="barber-img-container">
                    <img src={OwnerAgendar} alt="" />
                </div>

                <div className="form-container">

                    <form className="contato-form" onSubmit={handleSubmit}>
                        <div className="input-container">
                            <label htmlFor="name" className="form-label">Nome</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={form.name}
                                onChange={handleChange}
                                className="form-input"
                            />

                            <label htmlFor="service" className="form-label">Serviços</label>
                            <input
                                type="text"
                                id="service"
                                name="service"
                                value={form.service}
                                onChange={handleChange}
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
                                    value={form.data}
                                    onChange={handleChange}
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
                                value={form.horario}
                                onChange={handleChange}
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
