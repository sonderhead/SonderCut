import logo from '../../../assets/images/LOGO-TYPE.svg'
import './style.css'

export const Header = () => {
    return (
        <header>
            <img src={logo} alt="Logo Sonder Cut" />
            <nav className='nav-header'>
                <ul>
                    <li><a href="">Bem-Vindo</a></li>
                    <li><a href="">Quem somos?</a></li>
                    <li><a href="">Serviços</a></li>
                    <li><a href="">Contato</a></li>
                </ul>
            </nav>

            <a href="" className="btn-header">Agendar</a>
        </header>
    )
}