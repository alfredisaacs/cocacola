import React from 'react'
import '../assets/styles/menu.scss'

const Menu = () => {
    return (
        <div className="menu-container">
            <button className="close">X</button>
            <nav className="menu-container__items">
                <a href="#">Inicio</a>
                <a href="#">Variantes</a>
                <a href="#">Videos</a>
            </nav>
        </div>
    )
}

export default Menu