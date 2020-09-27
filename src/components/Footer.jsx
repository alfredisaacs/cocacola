import React from 'react'
import '../assets/styles/footer.scss'

const Footer = () => {
    return (
        <footer className="footer">
            <p className="copyright">&copy; 2019 The Coca-Cola Company, reservados todos los derechos.</p>
            <ul className="footer-links">
                <li><a href="#">Términos y condiciones</a></li>
                <li><a href="#">Políticas de privacidad</a></li>
                <li><a href="#">Oportunidades laborales</a></li>
                <li><a href="#">Información para inversores</a></li>
            </ul>
        </footer>
    )
}

export default Footer